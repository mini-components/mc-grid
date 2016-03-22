var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var PATHS = {
  SRC: {
    JS: 'src/js/**/*.js',
    HTML: 'src/templates/**/*.html',
    SCSS: 'src/scss/main.scss',
  },
  DEST: 'dist/'
};


/**
 * Create a new build.
 */
gulp.task('build', ['html', 'scss', 'js']);


/**
 * Watch the files for changes.
 */
gulp.task('watch', ['js', 'html', 'scss'], function() {
  gulp.watch(PATHS.SRC.JS, ['js']);
  gulp.watch(PATHS.SRC.HTML, ['html']);
  gulp.watch(PATHS.SRC.SCSS, ['scss']);
});


/**
 * Generate the JS bundle, compress it and mangle it.
 */
gulp.task('js', function() {
  gulp
    .src(PATHS.SRC.JS)
    .pipe(plugins.babel({
      presets: ['es2015'],
      plugins: ['transform-class-properties']
    }))
    .pipe(plugins.concat('grid.js'))
    .pipe(gulp.dest(PATHS.DEST));
});


/**
 * Remove the comments from the HTML, generate the cache-refreshing hash and
 * add dependencies to the index file.
 */
gulp.task('html', function() {
  gulp
    .src(PATHS.SRC.HTML)
    .pipe(plugins.templatecache({
      moduleName: 'mc.grid',
      output: 'grid-templates.js',
      strip: __dirname + '/src/'
    }))
    .pipe(gulp.dest(PATHS.DEST));
});


/**
 * Transpile SCSS to CSS.
 */
gulp.task('scss', function() {
  gulp
    .src(PATHS.SRC.SCSS)
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest(PATHS.DEST));
});

