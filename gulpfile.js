/*global require */
var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

var FLEX_FORM_VERSION = "0.3.0";
var ARC_VERSION = "0.1.0";

var DEV_TEST_VERSION = "dev";

gulp.task('sass', function() {
    return gulp.src('src/scss/flex.form.scss')
        .pipe(sass({
            outputStyle: 'expanded',
            indentWidth: 4
        }).on('error', sass.logError))
        .pipe(gulp.dest('dist/flex-form/' + FLEX_FORM_VERSION));
});

gulp.task('sass-min', function() {
    return gulp.src('src/scss/flex.form.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename('flex.form.min.css'))
        .pipe(gulp.dest('dist/flex-form/' + FLEX_FORM_VERSION));
});

gulp.task('arc-min', function() {
    return gulp.src('src/scss/arc.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename('arc.min.css'))
        .pipe(gulp.dest('dist/arc/' + DEV_TEST_VERSION));
})

gulp.task('watch', function(done) {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('src/scss/**/*.scss', gulp.series('sass-min'));
    gulp.watch('src/scss/**/*.scss', gulp.series('arc-min'));
    done();
});
