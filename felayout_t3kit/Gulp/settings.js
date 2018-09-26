let keepLicense = require('uglify-save-license');

module.exports = {
  assets: {
    copy: [
      {
        inputPaths: [
          './node_modules/flag-icon-css/flags/4x3/be.svg',
          './node_modules/flag-icon-css/flags/4x3/dk.svg',
          './node_modules/flag-icon-css/flags/4x3/ee.svg',
          './node_modules/flag-icon-css/flags/4x3/fr.svg',
          './node_modules/flag-icon-css/flags/4x3/fi.svg',
          './node_modules/flag-icon-css/flags/4x3/de.svg',
          './node_modules/flag-icon-css/flags/4x3/it.svg',
          './node_modules/flag-icon-css/flags/4x3/nl.svg',
          './node_modules/flag-icon-css/flags/4x3/nz.svg',
          './node_modules/flag-icon-css/flags/4x3/no.svg',
          './node_modules/flag-icon-css/flags/4x3/pl.svg',
          './node_modules/flag-icon-css/flags/4x3/pt.svg',
          './node_modules/flag-icon-css/flags/4x3/es.svg',
          './node_modules/flag-icon-css/flags/4x3/se.svg',
          './node_modules/flag-icon-css/flags/4x3/ch.svg',
          './node_modules/flag-icon-css/flags/4x3/gb.svg',
          './node_modules/flag-icon-css/flags/4x3/ua.svg',
          './node_modules/flag-icon-css/flags/4x3/ro.svg',
          './node_modules/flag-icon-css/flags/4x3/us.svg'
        ],
        outputPath: '../Resources/Public/css/flags/4x3'
      }
    ],
    compress: [
      {
        inputPaths: [
          './dev/images/*'
        ],
        outputPath: '../Resources/Public/css/images'
      }
    ]
  },
  css: {
    /**
     * You can define multiple bundles here.
     * Each bundle has 1-n input files which are processed and output to a single output bundle file.
     */
    bundles: [
      {
        bundleName: 'bootstrap.css',
        // `outputPath`(String) Path where to output generated JS files.
        outputPath: '../Resources/Public/css',
        // `inputPaths` Array of paths (globbing is possible) where to look for JS files to concat/minify
        inputPaths: [
          './dev/styles/bootstrap.scss'
        ],
        watchPaths: [
          './dev/styles/bootstrap.scss',
          './dev/styles/_customVariables.scss'
        ]
      },
      {
        bundleName: 'components.css',
        // `outputPath`(String) Path where to output generated JS files.
        outputPath: '../Resources/Public/css',
        // `inputPaths` Array of paths (globbing is possible) where to look for JS files to concat/minify
        inputPaths: [
          './dev/styles/components.scss'
        ],
        additionalCss: [
          './node_modules/awesomplete/awesomplete.css'
        ],
        watchPaths: [
          './dev/styles/components.scss'
        ]
      },
      {
        bundleName: 'main.css',
        // `outputPath`(String) Path where to output generated JS files.
        outputPath: '../Resources/Public/css',
        // `inputPaths` Array of paths (globbing is possible) where to look for JS files to concat/minify
        inputPaths: [
          './dev/styles/main.scss'
        ],
        watchPaths: [
          './dev/styles/main.scss',
          './dev/styles/_customVariables.scss',
          './dev/styles/main/**/*.scss'
        ]
      }
    ],
    // See https://browsersync.io/docs/options#option-serveStatic
    serveStatic: [
      {
        route: '/typo3conf/ext/dkd_customer/Resources/Public/Css',
        dir: './Resources/Public/Css'
      }
    ],
    postCss: {
      // https://github.com/postcss/autoprefixer#options
      autoprefixer: {},
      // http://cssnano.co/guides/presets/
      cssnano: {
        preset: 'default',
        reduceIdents: false // https://github.com/ben-eb/cssnano/issues/247
      }
    }
  },
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
    // See https://browsersync.io/docs/options#option-serveStatic
    serveStatic: [
      {
        route:
          '/typo3conf/ext/dkd_customer/Resources/Public/Javascript',
        dir: './Resources/Public/Javascript'
      }
    ],
    // reload the browser if one of the bundles got changes
    autoReload: true,
    // https://babeljs.io/docs/en/configuration
    babel: {
      presets: ["@babel/preset-env"]
    }
  }
};
