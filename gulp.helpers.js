var babelify   = require('babelify');
var browserify = require('browserify');
var minifyjs   = require('gulp-js-minify');
var source     = require('vinyl-source-stream');
var gulp       = require('gulp');

var PUBLIC_DIR = 'public';

exports.es6toes5 = function (src, dest) {
    return browserify({entries: src, extensions: ['.js'], debug: true})
        .transform(babelify, {
            "presets": ["es2015"]
        })
        .bundle()
        .pipe(source(dest))
        // .pipe(minifyjs())
        .pipe(gulp.dest(PUBLIC_DIR+'/js'));
};

function fixPipe(stream) {
    var origPipe = stream.pipe;
    stream.pipe = function (dest) {
        arguments[0] = dest.on('error', function (error) {
            var nextStreams = dest._nextStreams;
            if (nextStreams) {
                nextStreams.forEach(function (nextStream) {
                    nextStream.emit('error', error);
                });
            } else if (dest.listeners('error').length === 1) {
                throw error;
            }
        });
        var nextStream = fixPipe(origPipe.apply(this, arguments));
        (this._nextStreams || (this._nextStreams = [])).push(nextStream);
        return nextStream;
    };
    return stream;
};

exports.fixPipe = fixPipe;