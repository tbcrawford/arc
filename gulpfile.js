var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('src/scss/flex.form.scss')
        .pipe(sass({
            outputStyle: 'expanded',
            indentWidth: 4
        }).on('error', sass.logError))
        .pipe(gulp.dest('dist/flex-form/0.2.0'));
});

gulp.task('watch', function(done) {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
    done();
});
