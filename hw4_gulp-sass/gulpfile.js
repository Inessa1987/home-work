var gulp = require('gulp');
    sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

gulp.task('sass', function(){ 
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error',sass.logError)) 
        .pipe(gulp.dest('app/css'))
});

gulp.task('sass:watch', function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
});

gulp.task('autoprefixer', function(){
    return gulp.src('app/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
});


