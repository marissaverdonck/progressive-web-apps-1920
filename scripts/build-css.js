const gulp = require('gulp')
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

return gulp.src([
    './public/css/variables.css',
    './public/css/reset.css',
    './public/css/typography.css',
    './public/css/index.css',
  ])
  .pipe(concat('index.css'))
  .pipe(cleanCSS())
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(gulp.dest('./static/'))