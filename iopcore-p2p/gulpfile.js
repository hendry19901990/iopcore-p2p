'use strict';

var gulp = require('gulp');
var iopcoreTasks = require('iopcore-build');

iopcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
