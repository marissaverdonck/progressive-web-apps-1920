const gulp = require('gulp')
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

return gulp.src([
    './public/service-worker.js'
  ])
  .pipe(concat('service-worker.js'))
  .pipe(gulp.dest('./static/'))