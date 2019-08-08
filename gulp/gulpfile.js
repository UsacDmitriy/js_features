const gulp = require('gulp');
const concat = require('gulp-concat');

const cssFiles = [
    './node_modules/normalize.css/normalize.css',
    './src/css/some.css',
     './src/css/other.css'
    ];

function styles(){
    return gulp.src(cssFiles)
                    .pipe(concat('all.css'))
                    .pipe(gulp.dest('./build/css'));
};

function script() {
    
};


gulp.task('styles', styles);
gulp.task('script', script);
