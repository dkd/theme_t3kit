const chalk = require('chalk');
module.exports = {
	/**
	 * Checks if environment variable 'NODE_ENV' is set to production.
	 * @returns {boolean}
	 */
	isDevEnvironment: function() {
		return (
			(process.env.NODE_ENV || '').trim().toLowerCase() !== 'production'
		);
	},

	/**
	 * the default date format to print when logging
	 * @returns {string}
	 */
	timeStamp: function() {
		const currentTime = new Date();
		return `[${currentTime.getHours()}:${
			currentTime.getMinutes() < 10 ? '0' : ''
		}${currentTime.getMinutes()}:${currentTime.getSeconds()}]`;
	},

	/**
	 * Logs an error to console
	 * @param message
	 */
	logError(message) {
		console.log(this.timeStamp() + chalk.bgRed(message));
	},

	/**
	 * Logs a plugin error to stderr
	 *
	 * @param pluginName
	 * @param error
	 */
	logPluginError(pluginName, error) {
		const message = '[' + pluginName + '] ' + error.messageFormatted;
		this.logError(message);
	},

	/**
	 * Logs a general message to the console.
	 * @param message
	 */
	logInfo(message) {
		console.log(this.timeStamp() + ' ' + chalk.blue(message));
	},

	/**
	 * Logs a success message to the console.
	 * @param message
	 */
	logSuccess(message) {
		console.log(this.timeStamp() + ' ' + chalk.green(message));
	}
};
