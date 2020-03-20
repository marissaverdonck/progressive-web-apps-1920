const gulp = require('gulp')
const concat = require('gulp-concat');

return gulp.src([
    './public/js/script.js',
  ])
  .pipe(concat('script.js'))
  .pipe(gulp.dest('./static/'))