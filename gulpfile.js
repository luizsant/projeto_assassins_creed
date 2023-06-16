const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

function comprimeJavaScript() {
    return gulp.src('source/**/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());
}

function compilaSass() {
    return gulp.src('source/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());
}

function comprimeImagens() {
    return gulp.src('source/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
        .pipe(browserSync.stream());
}

function browser() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

exports.default = function() {
    browser();
    
    gulp.watch('source/**/*.scss', { ignoreInitial: false}, gulp.parallel(compilaSass));
    gulp.watch('source/**/*.js', { ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('source/images/**/*', { ignoreInitial: false}, gulp.series(comprimeImagens));
    gulp.watch("*.html").on('change', browserSync.reload);
}