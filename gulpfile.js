var gulp       = require('gulp');
var connect    = require('gulp-connect');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var clean      = require('gulp-clean');
var hbsfy      = require('hbsfy');

gulp.task('js', function() {
  hbsfy.configure({extensions: ['hbs']});
  
  return browserify("src/js/app.js", {
    insertGlobals : true
  })
    .transform(hbsfy)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('js'))
});

gulp.task('clean', function() {
  return gulp.src('js', {read: false})
    .pipe(clean());
});

gulp.task('connect', function() {
  connect.server();
});

gulp.task('watch', ['clean', 'js', 'connect'], function() {
  gulp.watch("src/js/**/*", ['js']);  
});

gulp.task('build', ['js']);
gulp.task('default', ['watch', 'js']);
