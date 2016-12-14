module.exports = function(gulp, $, browserSync, reload, merge, paths, files, del) {
  return function() {
    gulp.src(paths.templates.src)
    .pipe(gulp.dest(paths.templates.build));
  };
};
