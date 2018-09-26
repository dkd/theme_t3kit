const gulp = require('gulp');
const gulpIf = require('gulp-if');
const addSrc = require('gulp-add-src');
const concat = require('gulp-concat');
const gulpResolveUrl = require('gulp-resolve-url');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const helpers = require('../helpers');
const size = require('gulp-size');
const merge = require('merge-stream');

/**
 * Main function to process and bundle css
 *
 * * Compile SCSS->CSS
 * * autoprefixer
 * * cssnano (minification)
 *
 * @type {{process: module.exports.process}}
 */
module.exports = {
  process: function (browserSync, settings, changedFile) {
    const bundles = helpers.selectRelevantBundles(
      settings.css.bundles,
      changedFile
    );

    // options for postcssPlugins can be set in settings.js file.
    const postcssPlugins = [
      autoprefixer(settings.css.postCss.autoprefixer),
      cssnano(settings.css.postCss.cssnano)
    ];

    // merge all bundle streams together and process them
    return merge(
      ...bundles.map(function (bundle) {
          let stream = gulp
            .src(bundle.inputPaths)
            .pipe(sourcemaps.init())
            .pipe(
              sass({
                includePaths: (bundle.sassLibraries || [])
              }).on('error', function (error) {
                // show error in console
                helpers.logPluginError('sass', error);
                if (helpers.isDevEnvironment()) {
                  // show a notification in the browser
                  browserSync.notify(
                    'SCSS error. \n Please check cli. ',
                    6000
                  );
                  this.emit('end');
                }
                else {
                  process.exit(1);
                }
              })
            )
            .pipe(gulpResolveUrl(settings.css.resolve_url))
            // Prevent error with gulp-resolve-url plugin and sourcemaps.
            .pipe(sourcemaps.identityMap());

          // add optional css files for bundling
          if (Array.isArray(bundle.additionalCss)) {
            bundle.additionalCss.forEach(glob => {
              stream = stream.pipe(addSrc(glob));
            });
          }

          return stream.pipe(concat(bundle.bundleName))
            .pipe(postcss(postcssPlugins))
            .pipe(
              size({
                title: '[main css] ',
                gzip: false
              })
            )
            .pipe(gulpIf(helpers.isDevEnvironment(), sourcemaps.write('./')))
            .pipe(gulp.dest(bundle.outputPath))
            .pipe(browserSync.stream({match: '**/*.css'}))
        }
      )
    );
  }
};
