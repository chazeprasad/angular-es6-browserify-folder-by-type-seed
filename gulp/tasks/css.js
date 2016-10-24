import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';

import browserSync from 'browser-sync';

gulp.task('css', function() {

  return gulp.src(config.css.src)
    .pipe(changed(config.css.dest)) // Ignore unchanged files
    // Optimize
    .pipe(gulp.dest(config.css.dest))
    .pipe(browserSync.stream());

});
