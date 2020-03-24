const gulp = require('gulp')
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify')

return gulp.src([
    './public/manifest.json'
  ])
  .pipe(concat('manifest.json'))
  .pipe(gulp.dest('./static/'))