import config from '../config';
import gulp   from 'gulp';
import eslint from 'gulp-eslint';

gulp.task('eslint', () => {
  // return gulp.src([config.scripts.src, '!src/app/templates.js', config.scripts.test, config.scripts.gulp])
  return gulp.src([config.scripts.src, '!src/app/templates.js', config.scripts.gulp])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
