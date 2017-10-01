//npm install -g gulp
//npm install --save gulp gulp-live-server

const gulp = require('gulp');
const LiveServer = require('gulp-live-server');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const babelify = require('babelify');
const reactify = require('reactify');
const source = require('vinyl-source-stream');

gulp.task('live-server', function(){
    //This code gets called when live-server is ran via cli
    const server = new LiveServer('./server/main.js');
    server.start();
});

gulp.task('serve' , ['bundle', 'live-server'], function(){
    browserSync.init(null , {
        proxy : 'http://localhost:9999',
        port:9990
    });
});

//This function convert a JSX into a JS
gulp.task('bundle' , function(){
    return browserify({
        entries : 'app/main.jsx',
        debug : true,
    })
    .transform(babelify, {presets: ["es2015", "react"]})//.transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./.tmp'));
});

