var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


// or...

// gulp.task('browser-sync', function () {
//     browserSync.init({
//         proxy: "localhost:5000/"
//     });
// });

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        proxy: "localhost:5000/"
    });

    gulp.watch("../scss/*/*/*.scss", ['sass']);
    gulp.watch("../scss/*/*/*/*.scss", ['sass']);
    // gulp.watch("../scss/*/*/.scss").on('change', browserSync.reload);
    gulp.watch("../../*/*.js").on('change', browserSync.reload);
    // gulp.watch("../../components/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("../scss/*/*/*.scss")
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);