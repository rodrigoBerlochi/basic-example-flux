var gulp = require('gulp');
var babel = require('gulp-babel');
var newer = require('gulp-newer');
var webpack = require('webpack-stream');
var notify = require('gulp-notify');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

var onError = function(err) {
  notify.onError({
    title:    "Error",
    message:  "<%= error %>",
  })(err);
  this.emit('end');
};

//lint files

//transpile JSX and ES6 to JS 
//bundle in a single file, managing dependencies
gulp.task('transpile', function() {
  return gulp.src('js/src/app.jsx')
    .pipe(webpack({
      module: {
        loaders: [
          {
            test: [/\.js$/, /\.jsx$/],
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
      },
      output: {
        path: path.resolve(__dirname, "js/build/"),
        filename: "app.js"
      }
    }))
    .pipe(gulp.dest('js/build/'));
});

//add source maps

//budle dependencies in a separated file
// Copy react.js and react-dom.js to assets/js/src/vendor
// only if the copy in node_modules is "newer"
gulp.task('copy-react', function() {
  return gulp.src('node_modules/react/dist/react.js')
    .pipe(newer('js/vendor/react.js'))
    .pipe(gulp.dest('js/vendor'));
});

gulp.task('copy-react-dom', function() {
  return gulp.src('node_modules/react-dom/dist/react-dom.js')
    .pipe(newer('js/vendor/react-dom.js'))
    .pipe(gulp.dest('js/vendor'));
});

// Concatenate jsFiles.vendor and jsFiles.source into one JS file.
// Run copy-react and eslint before concatenating
gulp.task('concat-vendor', ['copy-react', 'copy-react-dom'], function() {
  return gulp.src(['js/vendor/react.js', 'js/vendor/react-dom.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('js/build/'));
});


//Define set of tasks
gulp.task('build-vendor', ['copy-react', 'copy-react-dom', 'concat-vendor']);
gulp.task('build-app', ['transpile']);
gulp.task('build', ['build-app', 'build-vendor']);