module.exports = function(gulp, $, browserSync, reload, merge, paths, files, del) {
  return function() {
    gulp.src('assets/css/src/app.less')
    .pipe($.changed(paths.styles.build))

    .pipe($.sourcemaps.init())
    .pipe($.less())
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie 9']
    }))
    .pipe($.minifyCss({
      'advanced': false
    }))
    .pipe($.rename('app.min.css'))
    .pipe($.sourcemaps.write('../sourcemaps'))
    .pipe($.size({
      showFiles: true,
      title: 'Styles:'
    }))
    .pipe(gulp.dest(paths.styles.build))
    .pipe(reload({
      stream: true
    }))
    .pipe($.duration('building styles'));
  };
};
