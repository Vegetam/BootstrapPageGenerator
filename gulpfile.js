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

// Start a server with Live Reload
gulp.task('serve', ['sass'], function () {
  browserSync({
    server: ['.tmp', './']
  });

  gulp.watch(['sass/**/*.scss'], ['sass']);
  gulp.watch(['css/*.css'], reload);

});


gulp.task('sass:watch', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});
