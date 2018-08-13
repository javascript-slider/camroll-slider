
// include gulp and plugins

const gulp     = require('gulp'),
      notify   = require("gulp-notify"),
      rename   = require('gulp-rename'),
      cleanCSS = require('gulp-clean-css'),
      uglify   = require('gulp-uglify'),
      del      = require('del');

// file locations

let paths = {
  cssIn:    'src/*.css',
  cssOut:   'dist/',
  cssClean: 'dist/*.css',
  jsIn:     'src/*.js',
  jsOut:    'dist/',
  jsClean:  'dist/*.js'
}

// clean
gulp.task('clean', () => {
  del( [].concat(paths.jsClean).concat(paths.cssClean) );
});

// css
gulp.task('css', () => {

  // clean old
  del(paths.cssClean);

  // compile
  return gulp.src(paths.cssIn)

    // output not minified css
    .pipe(gulp.dest(paths.cssOut))

    // minify css
    .pipe(cleanCSS())
    .pipe(rename({
      extname: ".min.css"
    }))

    // output minified css
    .pipe(gulp.dest(paths.cssOut));
});

// js
gulp.task('js', () => {

  // clean old
  del(paths.jsClean);

  // output
  return gulp.src(paths.jsIn)

    // output not minified
    .pipe(gulp.dest(paths.jsOut))

    // minify
    .pipe(uglify())

    // handle minifier errors
    .on('error', notify.onError((error) => {
      return {title: 'UglifyJS Error', message: error.message};
    }))

    // rename minified file
    .pipe(rename({
      extname: '.min.js'
    }))

    // output minified
    .pipe(gulp.dest(paths.jsOut));
});

// build
gulp.task('build', ['css', 'js']);

// default task
gulp.task('default', ['build']);
