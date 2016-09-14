'use strict';

const Gulp = require('gulp');
const Sass = require('gulp-sass');
const Concat = require('gulp-concat');
const SourceMaps = require('gulp-sourcemaps');
const BrowserSync = require('browser-sync');
const Spawn = require('child_process').spawn;

const CONFIG = require('./config');
const ENVIRONMENT = process.env.NODE_ENV || 'DEVELOPMENT';

Gulp.task('default', _ => {

});

Gulp.task('dev', ['express', 'browser-sync'], _ => {

});

// Browser-Sync
Gulp.task('browser-sync', _ => {
  BrowserSync.init({
    proxy: `localhost:${CONFIG[ENVIRONMENT].SERVER.PORT}`
  });
});

Gulp.task('express', _ => {
  let options = { shell: true, stdio: "inherit" };
  return Spawn('node', ['index.js'], options);
});

// SASS
Gulp.task('sass', _ => {
  return Gulp.src('./server/scss/**/*.scss')
    .pipe(Sass().on('error', Sass.logError))
    .pipe(SourceMaps.init())
    .pipe(Concat('styles.css'))
    .pipe(SourceMaps.write('./maps'))
    .pipe(Gulp.dest('./server/public/css/'))
  ;
});

Gulp.task('sass:watch', _ => {
  Gulp.watch('./server/scss/**/*.scss', ['sass']);
});