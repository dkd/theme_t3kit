const helpers = require('../helpers');
const rollup = require("rollup");
const rollupMultiEntry = require("rollup-plugin-multi-entry");
const rollupBabel = require("rollup-plugin-babel");
const rollupCommonjs = require("rollup-plugin-commonjs");
const rollupResolve = require("rollup-plugin-node-resolve");
const minimatch = require('minimatch');
const path = require('path');
const uglifyJs = require("uglify-js");
const fs = require("fs");

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
    let bundles = null;
    switch (typeof changedFile) {
      case 'string':
        const changedFilePath = path.resolve('./', changedFile);

        // iterate the settings and check which bundle is matching the changed file
        bundles = settings.js.bundles.filter(bundle => {
          let match = bundle.inputPaths.find(bundleFile => {
            return minimatch(
              changedFilePath,
              path.resolve('./', bundleFile)
            );
          });

          if (match === undefined) {
            return false;
          }

          helpers.logInfo(
            'rebuild ' +
            bundle.bundleName +
            ' due to change in ' +
            changedFile
          );
          return true;
        });

        if (bundles.length === 0) {
          helpers.logError(
            `Reload error: Could not find matching bundle for changed file '${changedFile}'.`
          );
        }

        break;
      case 'object':
        bundles = changedFile;
        break;
      default:
        bundles = settings.js.bundles;
    }
    // process each bundle with rollup
    bundles.forEach(async object => {
      const bundle = await rollup.rollup({
        input: object.inputPaths,
        plugins: [
          rollupMultiEntry({exports: false}),
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
          rollupBabel(settings.js.babel),
        ]
      });

      const {code, map} = await bundle.generate({
        format: 'iife',
        sourceMap: helpers.isDevEnvironment()
      });

      const sourceMapOptions = (helpers.isDevEnvironment()) ? {} : {
        filename: object.bundleName,
        url: `${object.bundleName}.map`,
        content: map
      };

      const uglified = uglifyJs.minify(
        code,
        {
          sourceMap: sourceMapOptions
        }
      );

      fs.writeFileSync(
        path.join(object.outputPath, object.bundleName),
        uglified.code
      );
      fs.writeFileSync(
        path.join(object.outputPath, `${object.bundleName}.map`),
        uglified.map
      );
    });
  }
};
