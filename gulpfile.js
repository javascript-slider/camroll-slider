const { series, parallel, src, dest } = require('gulp');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

const del = require('del');

const paths = {
  src: 'src/',
  dist: 'dist/',
  cssIn: 'src/*.css',
  cssClean: 'dist/*.css',
  jsIn: 'src/*.js',
  jsClean: 'dist/*.js',
};

/**
 * Clean assets in build folder
 *
 * @param {requestCallback} cb - Default callback required by Gulp.
 */
function clean(cb) {
  del(
    []
      .concat(paths.cssClean)
      .concat(paths.jsClean)
  );
  cb();
}

/**
 * Copy and minify CSS files
 */
function css() {
  return (
    src(paths.cssIn)
      // output not minified css
      .pipe(dest(paths.dist))
      // minify css
      .pipe(cleanCSS())
      .pipe(
        rename({
          extname: '.min.css',
        }),
      )
      // output minified css
      .pipe(dest(paths.dist))
  );
}

/**
 * Copy and minify JS files
 */
function js() {
  return (
    src(paths.jsIn)
      // output not minified
      .pipe(dest(paths.dist))
      // minify
      .pipe(uglify())
      // handle minifier errors
      .on(
        'error',
        notify.onError(error => {
          return { title: 'UglifyJS Error', message: error.message };
        }),
      )
      // rename minified file
      .pipe(
        rename({
          extname: '.min.js',
        }),
      )
      // output minified
      .pipe(dest(paths.dist))
  );
}

const build = parallel(css, js);

exports.clean = clean;
exports.css = css;
exports.js = js;
exports.build = build;

exports.default = build;
