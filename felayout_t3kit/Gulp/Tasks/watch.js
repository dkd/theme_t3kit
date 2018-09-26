const gulp = require('gulp');
const assetsTask = require('./assets');
const cssTask = require('./css');
const jsTask = require('./js');
const helpers = require('../helpers');

/**
 * Merges the arrays into one.
 * @param acc
 * @param next
 * @returns {[]}
 */
const flatReducer = (acc, next) => [...acc, ...next];

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
    helpers.logInfo('Starting watchers...');

    browserSync.init(settings.browserSync);

    // Watch assets.
    const assetWatchPathsCopy = settings.assets.copy
      .map(bundle => {
        return bundle.inputPaths;
      })
      .reduce(flatReducer, []);
    const assetWatchPathsCompress = settings.assets.compress
      .map(bundle => {
        return bundle.inputPaths;
      })
      .reduce(flatReducer, []);
    const assetWatcher = gulp.watch([
      ...assetWatchPathsCopy,
      ...assetWatchPathsCompress
    ]);
    assetWatcher.on('change', function (filePath) {
      assetsTask.process(browserSync, settings, filePath);
      settings.assets.autoReload
        ? browserSync.reload()
        : helpers.logInfo(filePath + ' changed.');
    });

    // Watch css files.
    const cssWatchPaths = settings.css.bundles
      .map(bundle => {
        return bundle.watchPaths;
      })
      .reduce(flatReducer, []);
    const cssWatcher = gulp.watch(cssWatchPaths);
    cssWatcher.on('change', function (filePath) {
      cssTask.process(browserSync, settings, filePath);
    });

    // Watch JS files.
    const jsWatchPaths = settings.js.bundles
      .map(bundle => {
        return bundle.watchPaths;
      })
      .reduce(flatReducer, []);
    const jsWatcher = gulp.watch(jsWatchPaths);
    jsWatcher.on('change', function (filePath) {
      jsTask.process(browserSync, settings, filePath);
      settings.js.autoReload
        ? browserSync.reload()
        : helpers.logInfo(filePath + ' changed.');
    });
  }
};
