const gulp = require('gulp')
const assetsTask = require('./assets')
const cssTask = require('./css')
const jsTask = require('./js')
const helpers = require('../helpers')

/**
 * Watch tasks.
 *
 * gulp.watch expects an array of globs. Since we are combining many arrays of
 * globs, those always have to be flattened (see usage of reduce).
 *
 * @type {{start: module.exports.start}}
 */
module.exports = {
  start: function (browserSync, settings) {
    helpers.logInfo('Starting watchers...')

    browserSync.init(settings.browserSync)

    // Watch assets.
    const assetWatcher = gulp.watch(
      helpers.watchedAssets(settings.assets)
    )
    assetWatcher.on('change', function (filePath) {
      assetsTask.process(browserSync, settings, filePath)
      settings.assets.autoReload
        ? browserSync.reload()
        : helpers.logInfo(filePath + ' changed.')
    })

    // Watch css files.
    const cssWatcher = gulp.watch(
      helpers.watchedCss(settings.css)
    )
    cssWatcher.on('change', function (filePath) {
      cssTask.process(browserSync, settings, filePath)
    })

    // Watch JS files.
    const jsWatcher = gulp.watch(
      helpers.watchedJs(settings.js)
    )
    jsWatcher.on('change', function (filePath) {
      jsTask.process(browserSync, settings, filePath)
      settings.js.autoReload
        ? browserSync.reload()
        : helpers.logInfo(filePath + ' changed.')
    })
  }
}
