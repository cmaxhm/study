let gulp = require('gulp');
let ts = require('gulp-typescript');

function typescript() {
  return gulp.src('./src/**/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      outFile: 'main.js',
      module: 'system'
    }))
    .pipe(gulp.dest('dist'));
}

function watch() {
  gulp.watch('./src/**/*.ts', typescript)
}

exports.typescript = typescript;
exports.default = watch;
