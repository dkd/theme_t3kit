let keepLicense = require('uglify-save-license');

module.exports = {
  js: {
    // uglify options; see https://github.com/mishoo/UglifyJS2
    uglify: {
      output: {
        // licences will (and must) be kept, even if the licence comment has no directive such as @license and /*!
        comments: keepLicense
      }
    },
    /**
     * You can define multiple bundles here.
     * Each bundle has 1-n input files which are processed and output to a single output bundle file.
     */
    bundles: [
      {
        bundleName: 'bootstrap.js',
        // `outputPath`(String) Path where to output generated JS files.
        outputPath: '../Resources/Public/css',
        // `inputPaths` Array of paths (globbing is possible) where to look for JS files to concat/minify
        inputPaths: [
          './dev/js/bootstrap.js'
        ]
      },
      {
        bundleName: 'components.js',
        // `outputPath`(String) Path where to output generated JS files.
        outputPath: '../Resources/Public/css',
        // `inputPaths` Array of paths (globbing is possible) where to look for JS files to concat/minify
        inputPaths: [
          './dev/js/components.js'
        ]
      },
      {
        bundleName: 'jquery.js',
        // `outputPath`(String) Path where to output generated JS files.
        outputPath: '../Resources/Public/css',
        // `inputPaths` Array of paths (globbing is possible) where to look for JS files to concat/minify
        inputPaths: [
          './dev/js/jquery.js'
        ]
      },
      {
        bundleName: 'main.js',
        // `outputPath`(String) Path where to output generated JS files.
        outputPath: '../Resources/Public/css',
        // `inputPaths` Array of paths (globbing is possible) where to look for JS files to concat/minify
        inputPaths: [
          './dev/js/main.js'
        ]
      }
    ],
    // https://babeljs.io/docs/en/configuration
    babel: {
      presets: ["@babel/preset-env"]
    }
  }
};
