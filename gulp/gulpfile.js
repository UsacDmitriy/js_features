const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
let del = require('del');


const cssFiles = [
    './node_modules/normalize.css/normalize.css',
    './src/css/some.css',
     './src/css/other.css'
    ];

const jsFiles = [
    './src/js/lib.js',
    './src/js/script2.js'

]

function styles(){
    return gulp.src(cssFiles)
                    .pipe(concat('all.css'))
                    .pipe(autoprefixer({
                        browsers: ['> 0.1%'],
                        cascade: false
                    }))
                    .pipe(cleanCSS({level: 2}))
                    .pipe(gulp.dest('./build/css'));
};

function script() {
    return gulp.src(jsFiles)
        .pipe(concat('all.js'))
        .pipe(uglify({
            toplevel:true
        }))
        .pipe(gulp.dest('./build/js'));
};

function watch(){
    gulp.watch('./src/css/**/*.css', styles);
    gulp.watch('./src/js/**/*.js', script);
}

function clean(){
    return del(['build/*']);
}

gulp.task('styles', styles);
gulp.task('script', script);
gulp.task('watch', watch);

gulp.task('build', gulp.series(clean, gulp.parallel(styles, script)));