import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';

import browserSync from 'browser-sync';

gulp.task('lib', function() {

  return gulp.src(config.lib.src)
    .pipe(changed(config.lib.dest)) // Ignore unchanged files
    // Optimize
    .pipe(gulp.dest(config.lib.dest))
    .pipe(browserSync.stream());

});
