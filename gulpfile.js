var gulp = require('gulp'),
sass = require('gulp-sass'),
cleanCSS = require('gulp-clean-css'),
inlineCss = require('gulp-inline-css'),
autoprefixer = require('gulp-autoprefixer'),
inlineCss = require('gulp-inline-css');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('inline', function() {
    return gulp.src('./*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('build/'));
});

gulp.task('minify-css', () => {
    return gulp.src('./css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8', inline:'local'}))
      .pipe(gulp.dest('./css/minified'));
  });

gulp.task('prefixer', () =>
  gulp.src('css/main.css')
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(gulp.dest('./css/minified'))
);

gulp.task('inline', function() {
  return gulp.src('./*.html')
      .pipe(inlineCss())
      .pipe(gulp.dest('build/'));
});
gulp.task('watch', function () {
  gulp.watch('./scss/*.scss', gulp.series('sass'));
  gulp.watch('./css/*.css', gulp.series('prefixer'));
  gulp.watch('./scss/*.scss', gulp.series('minify-css'));
});
