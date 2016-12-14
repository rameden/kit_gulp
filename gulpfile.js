//Load plugins

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var merge       = require('merge-stream');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var paths       = require('./gulp-tasks/paths.json');
var files       = require('./gulp-tasks/files.json');
var del         = require('del');
var ghPages     = require('gulp-gh-pages');

var getTask = function(task) {
  return require('./gulp-tasks/' + task)(gulp, $, browserSync, reload, merge, paths, files, del, ghPages);
};

//clean
gulp.task('clean', getTask('del'));
// Copy
gulp.task('copy', getTask('copy'));
// Styles
gulp.task('styles', getTask('styles'));
// Scripts
gulp.task('scripts', getTask('scripts'));
//templates
gulp.task('templates', getTask('templates'));
// Media
gulp.task('media', getTask('media'));
// SVG
gulp.task('svg', getTask('svg'));
// SVG Sprite
gulp.task('svg-sprite', getTask('svg-sprite'));
// Deploy for GitHub Pages
gulp.task('deploy', getTask('deploy'));


// Bundled Tasks
gulp.task('default', [
  'copy',
  'styles',
  'scripts',
  'templates',
  'media',
  'svg',
  'svg-sprite'
]);
