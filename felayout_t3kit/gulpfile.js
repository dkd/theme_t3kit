const settings = require('./Gulp/settings.js')
const helpers = require('./Gulp/helpers')
const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const cssTask = require('./Gulp/Tasks/css')
const jsTask = require('./Gulp/Tasks/js')
const assetsTask = require('./Gulp/Tasks/assets')
const lintTask = require('./Gulp/Tasks/lint')
const watchTask = require('./Gulp/Tasks/watch')

/**
 * Lints scss files.
 */
gulp.task('lint:css', function () {
  return lintTask.css.process(settings)
})

/**
 * Lint js files.
 */
gulp.task('lint:js', function () {
  return lintTask.js.process(settings)
})

gulp.task('lint', gulp.series('lint:css', 'lint:js'))

/**
 * Build assets.
 * Copies files and compresses images.
 */
gulp.task('assets', function () {
  return assetsTask.process(browserSync, settings)
})

/**
 * Build javascript.
 */
gulp.task('js', function () {
  return jsTask.process(browserSync, settings)
})

/**
 * Build css from sass and external css files.
 */
gulp.task('css', function () {
  return cssTask.process(browserSync, settings)
})

/**
 * This is the main build task.
 * Runs assets, css and js tasks in parallel.
 */
gulp.task('build', gulp.series('lint', gulp.parallel('assets', 'css', 'js')))

/**
 * The watch task should be used during local development.
 */
gulp.task(
  'watch',
  gulp.series('build', function () {
    return watchTask.start(browserSync, settings)
  })
)

/**
 * The default task is more or less an alias for the watch task.
 */
gulp.task(
  'default',
  gulp.series('build', function () {
    helpers.logInfo('Starting default task.')
    helpers.logInfo(
      'See other available tasks by running \'npx gulp --tasks\''
    )
    return watchTask.start(browserSync, settings)
  })
)
