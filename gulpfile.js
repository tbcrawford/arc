/*global require */
var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

var ARC_VERSION = "0.1.0";
var DEV_TEST_VERSION = "dev";

gulp.task('arc', function() {
    return gulp.src('src/scss/arc.scss')
        .pipe(sass({
            outputStyle: 'expanded',
            indentWidth: 4
        }).on('error', sass.logError))
        .pipe(gulp.dest('dist/arc/' + ARC_VERSION));
});

gulp.task('arc-min', function() {
    return gulp.src('src/scss/arc.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename('arc.min.css'))
        .pipe(gulp.dest('dist/arc/' + ARC_VERSION));
});

gulp.task('watch', function(done) {
    gulp.watch('src/scss/**/*.scss', gulp.series('arc'));
    gulp.watch('src/scss/**/*.scss', gulp.series('arc-min'));
    done();
});
