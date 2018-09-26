const chalk = require('chalk')
const path = require('path')
const minimatch = require('minimatch')

/**
 * Merges arrays into one.
 * @param acc
 * @param next
 * @returns {[]}
 */
const flatReducer = (acc, next) => [...acc, ...next]

module.exports = {
  /**
   * Checks if environment variable 'NODE_ENV' is set to production.
   * @returns {boolean}
   */
  isDevEnvironment: function () {
    return (
      (process.env.NODE_ENV || '').trim().toLowerCase() !== 'production'
    )
  },

  /**
   * the default date format to print when logging
   * @returns {string}
   */
  timeStamp: function () {
    const currentTime = new Date()
    return `[${currentTime.getHours()}:${
      currentTime.getMinutes() < 10 ? '0' : ''
    }${currentTime.getMinutes()}:${currentTime.getSeconds()}]`
  },

  /**
   * Logs an error to console
   * @param message
   */
  logError (message) {
    console.log(this.timeStamp() + chalk.bgRed(message))
  },

  /**
   * Logs a plugin error to stderr
   *
   * @param pluginName
   * @param error
   */
  logPluginError (pluginName, error) {
    const message = '[' + pluginName + '] ' + error.messageFormatted
    this.logError(message)
  },

  /**
   * Logs a general message to the console.
   * @param message
   */
  logInfo (message) {
    console.log(this.timeStamp() + ' ' + chalk.blue(message))
  },

  /**
   * Logs a success message to the console.
   * @param message
   */
  logSuccess (message) {
    console.log(this.timeStamp() + ' ' + chalk.green(message))
  },

  /**
   * Searches the given watchedBundles for bundles affected by the
   * changedFiles(s).
   *
   * @param {Array<Object>} watchedBundles
   * @param {Object|String} changedFile
   * @returns {Array<Object>}
   */
  selectRelevantBundles (watchedBundles, changedFile) {
    let bundles = null
    switch (typeof changedFile) {
      case 'string':
        const changedFilePath = path.resolve('./', changedFile)

        // iterate the settings and check which bundle is matching the changed file
        bundles = watchedBundles.filter(bundle => {
          const match = bundle.watchPaths.find(bundleFile => {
            return minimatch(
              changedFilePath,
              path.resolve('./', bundleFile)
            )
          })

          if (match === undefined) {
            return false
          }

          this.logInfo(
            'rebuild ' +
            bundle.bundleName +
            ' due to change in ' +
            changedFile
          )
          return true
        })

        if (bundles.length === 0) {
          this.logError(
            `Reload error: Could not find matching bundle for changed file '${changedFile}'.`
          )
        }

        break
      case 'object':
        bundles = changedFile
        break
      default:
        bundles = watchedBundles
    }
    return bundles
  },
  cssHeader: (file) => `<link rel="stylesheet" type="text/css" href="/${file}"/>`,
  jsHeader: (file) => `<script src="/${file}"></script>`,
  /**
   * Build list of all watched asset files.
   *
   * @param assetsSettings
   * @returns {[]}
   */
  watchedAssets: (assetsSettings) => {
    const assetWatchPathsCopy = assetsSettings.copy
      .map(bundle => {
        return bundle.inputPaths
      })
      .reduce(flatReducer, [])
    const assetWatchPathsCompress = assetsSettings.compress
      .map(bundle => {
        return bundle.inputPaths
      })
      .reduce(flatReducer, [])
    return [
      ...assetWatchPathsCopy,
      ...assetWatchPathsCompress
    ]
  },
  /**
   * Build list of all watched css files.
   *
   * @param cssSettings
   * @returns {[]}
   */
  watchedCss: (cssSettings) => {
    return cssSettings.bundles
      .map(bundle => {
        return bundle.watchPaths
      })
      .reduce(flatReducer, [])
  },
  /**
   * Build list of all watched js files.
   *
   * @param jsSettings
   * @returns {[]}
   */
  watchedJs: (jsSettings) => {
    return jsSettings.bundles
      .map(bundle => {
        return bundle.watchPaths
      })
      .reduce(flatReducer, [])
  }
}
