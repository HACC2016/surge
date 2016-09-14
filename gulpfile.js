'use strict';

const Gulp = require('gulp');
const Sass = require('gulp-sass');
const Concat = require('gulp-concat');

Gulp.task('default', _ => {

});

Gulp.task('dev', [''], _ => {

});

Gulp.task('sass', _ => {
  return Gulp.src('./server/scss/**/*.scss')
    .pipe(Sass().on('error', Sass.logError))
    .pipe(Concat('styles.css'))
    .pipe(Gulp.dest('./server/public/css/'));
});

Gulp.task('sass:watch', _ => {
  Gulp.watch('./server/scss/**/*.scss', ['sass']);
});