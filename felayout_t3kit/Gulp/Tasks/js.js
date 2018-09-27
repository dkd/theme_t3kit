const helpers = require('../helpers')
const rollup = require('rollup')
const rollupMultiEntry = require('rollup-plugin-multi-entry')
const rollupBabel = require('rollup-plugin-babel')
const rollupCommonjs = require('rollup-plugin-commonjs')
const rollupResolve = require('rollup-plugin-node-resolve')
const path = require('path')
const uglifyJs = require('uglify-js')
const fs = require('fs')
const prettyBytes = require('pretty-bytes')
const chalk = require('chalk')

/**
 * Javascript processing
 * @type {{process: module.exports.process}}
 */
module.exports = {
  /**
   * This is the main processing function.
   *
   * @param browserSync instance
   * @param settings instance
   * @param changedFile optional. Checks the settings and compiles only affected bundles.
   */
  process: function (browserSync, settings, changedFile) {
    const changedBundles = helpers.selectRelevantBundles(
      settings.js.bundles,
      changedFile
    )

    // process each bundle with rollup
    const promises = changedBundles.map(async object => {
      const bundle = await rollup.rollup({
        input: object.inputPaths,
        plugins: [
          rollupMultiEntry({ exports: false }),
          // convert non-es6 libraries so that rollup can bundle them
          rollupCommonjs({
            include: /node_modules/
          }),
          // resolve node_modules
          rollupResolve({
            jsnext: true,
            browser: true
          }),
          // transpile es6
          rollupBabel(settings.js.babel)
        ]
      })

      const { code, map } = await bundle.generate({
        format: 'iife',
        sourceMap: helpers.isDevEnvironment()
      })

      const uglifyJsOptions = {
        sourceMap: (helpers.isDevEnvironment()) ? {} : {
          filename: object.bundleName,
          url: `${object.bundleName}.map`,
          content: map
        }
      }

      const uglified = uglifyJs.minify(
        code,
        {
          ...settings.js.uglify,
          ...uglifyJsOptions
        }
      )

      console.log(
        helpers.timeStamp() + ' ' +
        chalk.cyan(`[${object.bundleName}]  `) +
        chalk.green('all files ') +
        chalk.magenta(prettyBytes(uglified.code.length + uglified.map.length))
      )

      fs.writeFileSync(
        path.join(object.outputPath, object.bundleName),
        `${uglified.code}
        /*# sourceMappingUrl=${object.bundleName}.map */`
      )
      fs.writeFileSync(
        path.join(object.outputPath, `${object.bundleName}.map`),
        uglified.map
      )
    })
    return Promise.all(promises)
  }
}
