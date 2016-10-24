import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';

import browserSync from 'browser-sync';

gulp.task('js', function() {

  return gulp.src(config.js.src)
    .pipe(changed(config.js.dest)) // Ignore unchanged files
    // Optimize
    .pipe(gulp.dest(config.js.dest))
    .pipe(browserSync.stream());

});
