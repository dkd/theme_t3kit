const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const merge = require('merge-stream');

module.exports = {
  process(browserSync, settings) {
    const compressStream = merge(
      ...settings.assets.compress.map(bundle => gulp
        .src(bundle.inputPaths)
        .pipe(imagemin())
        .pipe(gulp.dest(bundle.outputPath))
      )
    );

    const copyStream = merge(
      ...settings.assets.copy.map(bundle => gulp
        .src(bundle.inputPaths)
        .pipe(gulp.dest(bundle.outputPath))
      )
    );

    return merge(compressStream, copyStream);
  }
};
