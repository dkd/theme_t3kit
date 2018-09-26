# felayout_t3kit

## Front-End layout for **theme_t3kit**

### Required dependencies:

- [Git](https://git-scm.com/)
- [NodeJs](http://nodejs.org/) >=8.9.0
- [NPM](https://github.com/npm/npm) >=5.6.0

***

### Install NPM dependencies:

```bash
cd felayout_t3kit
npm install
```

***

## `felayout_t3kit` includes CSS and JS source files for theme_t3kit project.

1. `felayout_t3kit` works closely with t3kit docker, so to start developing using felayout_t3kit we need to [install and run t3kit using docker configuration](https://github.com/t3kit/t3kit#development)

2. Next step we need disable default styling (CSS) and JS scripts in t3kit to be able to insert it (CSS/JS) dynamically from felayout_t3kit. For this, we need to change `FElayout mode` constant from `scss` to `development`.
   * TYPO3 BE -> tab `Themes` -> `Expert` -> `FElayout mode`

3. Next step is to run local server (_proxied from t3kit TYPO3 installation_) `localhost:9001` which includes all CSS/JS files (`theme_t3kit/felayout_t3kit/dev`) with livereloading. For this, we need to use command `npm run watch`.

4. Last step. After all changes (CSS/SCSS/JS) which you did in `felayout_t3kit` you will need to compile FE files into `theme_t3kit/Resources/Public/css` folder using command: `npm run build`. Also, keep in mind that these compiled files should be committed in separate commits with a message `update css/js` without any prefixes. [Commit messages without prefixes shouldn't go to changelog files](https://github.com/t3kit/t3kit/blob/master/CONTRIBUTING.md#labels). **Do not commit compiled files together with source files from `theme_t3kit/felayout_t3kit/dev`**



### Gulp commands:

- Run `gulp` to start local server (_proxied from t3kit TYPO3 installation_) with livereload `localhost:9001`
- Run `gulp lint` to check CSS (.stylelintrc) and JS (JS standard) files according code conventions.
- Run `gulp assets` to copy and compress all images to `theme_t3kit/Resources/Public/css` folder.
- Run `gulp css` to compile all Front-End service files plus **CSS** styling for **t3kit** needs and copy it to `theme_t3kit/Resources/Public/css` folder.
- Run `gulp js` to compile all JS files and copy them to `theme_t3kit/Resources/Public/css` folder.
- Run `gulp build` to compile all Front-End service files for production.  `assets` + `css` + `js`.
