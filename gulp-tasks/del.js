module.exports = function(gulp, $, browserSync, reload, merge, paths, files, del) {
  return function() {
    del('dist');
  };
};
