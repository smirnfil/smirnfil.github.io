"use strict";


var stdio = require('stdio');
var ops = stdio.getopt({ 'serve': {} });

var metalsmith  = require('metalsmith');
var serve       = ops.serve ? require('metalsmith-serve') : function () { };
var branch      = require('metalsmith-branch');
var markdown    = require('metalsmith-markdown');
var templates   = require('metalsmith-templates');
var collections = require('metalsmith-collections');
var permalinks  = require('metalsmith-permalinks');
var Handlebars  = require('handlebars');
var fs          = require('fs');

var partials = fs.readdirSync(__dirname + '/templates/partials');

for (var i = 0; i < partials.length; i++) {
		Handlebars.registerPartial(partials[i].split('.')[0], fs.readFileSync(__dirname + '/templates/partials/' + partials[i]).toString());
}

metalsmith(__dirname)
	.source('src')
	.use(markdown())	
	.use(collections({
		pages: {
			pattern : 'content/pages/*.md'
		},
		posts: {
			pattern : 'content/posts/*.md'
		}
	}))
	.use(branch('content/posts/*.html')
		.use(permalinks({
		     pattern: 'posts/:short_title'
		}))
	)
	.use(branch('content/posts/*.html')
		.use(permalinks({
		     pattern: 'posts/:short_title'
		}))
	)
	.use(branch('content/pages/*.html')
		.use(permalinks({
		     pattern: ':short_title'
		}))
	)
	.use(templates('handlebars'))	
	.destination('build')
	.use(serve())	
	.build(function (err) {
	if (err) {
		throw err;
	}
});