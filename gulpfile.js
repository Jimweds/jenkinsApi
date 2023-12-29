var gulp = require("gulp");
var uglifyjs = require("uglify-js"); // can be a git checkout
// or another module (such as `uglify-es` for ES6 support)
var composer = require("gulp-uglify/composer");
var pump = require("pump");

var minify = composer(uglifyjs, console);

gulp.task("compress", function (cb) {
  var options = {
    mangle: true,
    compress: {
      drop_console: false,
    },
  };

  pump([gulp.src("src/*.js"), minify(options), gulp.dest("lib")], cb);

  // glup.src('lib/*.js')
  //   .pipe(uglify())
  //   .pipe(gulp.dest('dist'))
});
