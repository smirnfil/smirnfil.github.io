"use strict";


var stdio = require('stdio');
var ops = stdio.getopt({ 'serve': {} });

var metalsmith = require('metalsmith');
var serve = ops.serve ? require('metalsmith-serve') : function () { };
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');


metalsmith(__dirname)
	.source('src')
	.use(markdown())
	.use(templates('handlebars'))	
	.destination('build')
	.use(serve())	
	.build(function (err) {
	if (err) {
		throw err;
	}
});