"use strict";


var stdio = require('stdio');

var ops = stdio.getopt({'serve': {}});


var metalsmith = require('metalsmith');
var serve = ops.serve ? require('metalsmith-serve') : function(){};


metalsmith(__dirname)
	.source('src')
	.destination('build')
	.use(serve())
	.build(function (err) {
		if (err) {
			throw err;
		}
	});