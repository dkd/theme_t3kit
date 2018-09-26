const gulp = require('gulp')
const stylelint = require('gulp-stylelint')
const standard = require('gulp-standard')
const helpers = require('../helpers')

module.exports = {
  css: {
    /**
     * Lint SCSS files according to settings.
     *
     * @param settings
     */
    process (settings) {
      return gulp.src(helpers.watchedCss(settings.css))
        .pipe(stylelint({
          reporters: [
            { formatter: 'string', console: true }
          ]
        }))
    }
  },
  js: {
    /**
     * Lint JS files according to settings.
     *
     * @param settings
     */
    process (settings) {
      return gulp.src([
        ...helpers.watchedJs(settings.js),
        ...[
          './Gulp/**/*.js',
          './gulpfile.js'
        ]
      ])
        .pipe(standard())
        .pipe(standard.reporter('default', {
          breakOnError: true,
          quiet: true
        }))
    }
  }
}
