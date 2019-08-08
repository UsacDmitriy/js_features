let gulp  = require('gulp');
let gulp  = require('gulp-less');


gulp.task('default', function () {
    gulp.watch('lees/*.less', function (e) { 
        
        gulp.src(e.path)
        .pipe(less())
        .pipe(gulp.dest('css'))
     })

  });
