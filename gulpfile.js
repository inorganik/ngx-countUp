var gulp = require('gulp');
var wrap = require('gulp-wrap-umd');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task('clean', function(cb) {
	del(['dist/*']);
	return cb();
});

gulp.task('umd', ['clean'], function(file) {
	var angular2Countup = tsProject
		.src()
		.pipe(tsProject())
		.pipe(gulp.dest('dist/'));
});

gulp.task('build', ['umd']);
gulp.task('default', ['build']);
