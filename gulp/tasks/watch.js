import config from '../config';
import gulp   from 'gulp';

gulp.task('watch', ['browserSync'], function() {

  global.isWatching = true;

  // Scripts are automatically watched and rebundled by Watchify inside Browserify task
  gulp.watch(config.scripts.src, ['eslint']);
  // gulp.watch(config.scripts.src, []);
  gulp.watch(config.css.src,  ['css']);
  gulp.watch(config.js.src,  ['js']);
  gulp.watch(config.images.src,  ['images']);
  gulp.watch(config.fonts.src,   ['fonts']);
  gulp.watch(config.views.watch, ['views']);

});
