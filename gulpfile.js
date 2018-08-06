let gulp 			= require('gulp'),
concat 			= require('gulp-concat'),
cssmin 			= require('gulp-minify-css'),
rename          = require('gulp-rename'),
less 			= require('gulp-less'),
copy            = require('gulp-contrib-copy'),
autoprefixer    = require('gulp-autoprefixer'),
helpers         = require('./gulp.helpers'),
minify          = require('gulp-babel-minify'),
imagemin        = require('gulp-imagemin'),
livereload = require('gulp-livereload'),
hash_src = require("gulp-hash-src"),
htmlmin = require('gulp-htmlmin');

require("any-promise/register")("bluebird");

livereload({ start: true });

let origSrc = gulp.src;
let PUBLIC_DIR = 'public';
let path = {
	scripts     : ['resources/js/**/*.js' ],
	less        : ['resources/styles/style.less' ],
	fonts       : ['resources/fonts/**/*.*'],
  img         : ['resources/img/**/*.*']
};

gulp.src = function () {
	return helpers.fixPipe(origSrc.apply(this, arguments));
};


gulp.task('fonts', function() {
    return gulp.src(path.fonts)
        .pipe(copy())
        .pipe(gulp.dest(PUBLIC_DIR+'/fonts'));
});

gulp.task('img', function() {
	return gulp.src(path.img)
		.pipe(imagemin())
		.pipe(gulp.dest(PUBLIC_DIR+'/img'));
});

gulp.task('script', function() {
    return helpers.es6toes5('resources/js/index.js', 'index.js')
      .pipe(livereload());
});
//
// gulp.task('script-concat', ['script'], function() {
//   return gulp.src([PUBLIC_DIR+'/js/index.js'])
//     .pipe(concat( 'index.js'))
//     .pipe(gulp.dest(PUBLIC_DIR+'/js'))
// });

gulp.task('script-min', () => {
    return gulp.src([PUBLIC_DIR+'/js/index.js'])
        .pipe(minify({
            mangle        : false,
            drop_debugger : true,
            drop_console  : true,
            evaluate      : true,
            unsafe        : false
        }))
        .pipe(gulp.dest(PUBLIC_DIR+'/js'))
});

gulp.task('less', function () {
	return gulp.src(path.less)
		.pipe(less())
		.pipe(autoprefixer([
			'Firefox > 20',
			'Safari > 8',
			'iOS > 7',
			'ie > 8'
		]))
		.pipe(cssmin())
		.pipe(rename('app.min.css'))
		.pipe(gulp.dest(PUBLIC_DIR+'/css'))
    .pipe(livereload());
});

gulp.task("hash", function() {
  return gulp.src(["./resources/html/index.html"])
    .pipe(hash_src({
      build_dir: "./",
      src_path: "./resources/html",
      hash_len: 5,
      exts: [".js", ".css"],
      query_name: 'v'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest("./"))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
	gulp.watch('resources/js/**/*.js', ['script']);
	gulp.watch('resources/styles/**/*.less', ['less']);
	gulp.watch('resources/html/index.html', ['hash']);
});

gulp.task('default', ['script', 'less', 'fonts', 'img','hash', 'watch']);
gulp.task('prod', ['script-min', 'less', 'fonts', 'img','hash']);
