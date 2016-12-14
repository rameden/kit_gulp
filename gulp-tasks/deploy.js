module.exports = function(gulp, $, browserSync, reload, merge, paths, files, del, ghPages) {
  return function() {
    return gulp.src('./dist/**/*')
    .pipe(ghPages());
  };
};
