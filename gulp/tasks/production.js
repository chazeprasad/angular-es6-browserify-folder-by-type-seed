import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('prod', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = true;

  // runSequence(['styles', 'images', 'fonts', 'views'], 'browserify', 'gzip', cb);
  runSequence(['css', 'js', 'images', 'fonts', 'views'], 'browserify', cb);

});
