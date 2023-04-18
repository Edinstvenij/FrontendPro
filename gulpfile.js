const {task, src, dest, watch, series,} = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const del = require('del');

task('js', () => {
    return src('./src/scripts/index.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(dest('dist/scripts/'));
});

task('css', () => {
    return src('src/styles/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename('style.min.css'))
        .pipe(dest('dist/style/'));
});

task('img', () => {
    return src('./src/img/*')
        .pipe(imagemin())
        .pipe(dest('dist/images/'))
});

task('watch', () => {
    watch('./src/scripts/index.js', series('js'));
    watch('./src/styles/*.scss', series('css'));
});

task('clear', () => {
    return del('dist/*');
});

task('default', series('clear', 'css', 'js', 'img', 'watch'));
