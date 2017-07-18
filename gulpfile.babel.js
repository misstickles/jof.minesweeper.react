'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');

var config = {
    port: 3000,
    baseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: [
            './src/**/*.js'
        ],
        bootstrap: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        less: [
            './src/**/*.less'
        ],
        dist: './dist',
        mainJs: './src/main.js'
    },
}

gulp.task('connect', () => {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.baseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], () => {
    gulp.src('dist/index.html')
        .pipe(open({
            uri: config.baseUrl + ':' + config.port + '/'
        }));
});

gulp.task('html', () => {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', () => {
    browserify(config.paths.mainJs)
        .transform(babelify)
        .bundle()
        .on('error', function(err) { console.error(err); })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('css', () =>  {
    gulp.src(config.paths.bootstrap)
		.pipe(concat('bootstrap.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('less', () => {
    gulp.src(config.paths.less)
        .pipe(less())
        .pipe(minifyCSS())
		.pipe(concat('app.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('lint', () => {
    return gulp.src(config.paths.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('watch', () => {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('default', ['html', 'js', 'css', 'less', 'lint', 'open', 'watch']);