'use strict';

var        gulp = require('gulp'),
    browserSync = require('browser-sync'),
         reload = browserSync.reload;
var        sass = require('gulp-sass');


gulp.task('sass', function () {
  gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch(['css/*.css'], reload);
});


// Start a server with Live Reload
gulp.task('serve', ['sass'], function () {
  browserSync({
    // notify: false,
    // Customize the BrowserSync console logging prefix
    // logPrefix: 'WSK',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ['.tmp', './']

    // proxy: 'http://localhost:8888/'

  });


  gulp.watch(['./scss/**/*.scss'], ['sass']);
  gulp.watch(['css/**/*.css'], reload);
  gulp.watch(['./*.html'], reload);
  // gulp.watch(['./*.php'], reload);
  // gulp.watch(['js/**/*.js'], [reload]);
});
