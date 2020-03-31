const gulp = require('gulp')
const concat = require('gulp-concat');
const uglify = require('gulp-uglify')

return gulp.src([
    './public/js/script.js',
  ])
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest('./static/js'))