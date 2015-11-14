var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require("gulp-notify");

var nodemonOptions = {
    script: 'bin/www',
    ext: 'js',
    env: { 'NODE_ENV': 'development' },
    verbose: false,
    ignore: ['public/*', 'node_modules/*', 'views/*', 'gulpfile.js', 'webpack.config.js']
};

gulp.task('start', function () {
    nodemon(nodemonOptions)
        .on('restart', function () {
            console.log('restarted!');
            notify('Node Server Restarted');
        });
});

gulp.task('default', ['start']);