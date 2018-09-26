const settings = require('./Gulp/settings.js');
const helpers = require('./Gulp/helpers');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cssTask = require('./Gulp/Tasks/css');
const jsTask = require('./Gulp/Tasks/js');
const assetsTask = require('./Gulp/Tasks/assets');
const watchTask = require('./Gulp/Tasks/watch');

gulp.task('assets', function() {
  return assetsTask.process(browserSync, settings);
});

/**
 * Build javascript
 * Requires task modernizr to be completed first.
 */
gulp.task('js', function () {
  return jsTask.process(browserSync, settings);
});

/**
 * Build css
 */
gulp.task('css', function () {
  return cssTask.process(browserSync, settings);
});

/**
 * This is the main build task.
 * It is used during deployment.
 * Runs css and js task in parallel
 */
gulp.task('build', gulp.parallel('assets', 'css', 'js'));

/**
 * The watch task must be used during local development
 */
gulp.task(
  'watch',
  gulp.series('build', function (done) {
    watchTask.start(browserSync, settings);
    done();
  })
);

/**
 * The default task is more or less an alias for the watch task.
 */
gulp.task(
  'default',
  gulp.series('build', function (done) {
    helpers.logInfo('Starting default task.');
    helpers.logInfo(
      "See other available tasks by running 'npx gulp --tasks'"
    );
    watchTask.start(browserSync, settings);
    done();
  })
);
