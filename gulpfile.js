var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  gulp.src("less/style.less")
  .pipe(less())
  .pipe(gulp.dest("css"));
});
