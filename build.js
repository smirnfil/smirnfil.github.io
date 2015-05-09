"use strict";


var stdio = require('stdio');
var ops = stdio.getopt({ 'serve': {} });

var metalsmith = require('metalsmith');
var serve = ops.serve ? require('metalsmith-serve') : function () { };
var markdown = require('metalsmith-markdown');


metalsmith(__dirname)
	.source('src')
	.destination('build')
	.use(markdown())
	.use(serve())	
	.build(function (err) {
	if (err) {
		throw err;
	}
});