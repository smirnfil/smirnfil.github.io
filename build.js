"use strict";


var stdio = require('stdio');
var ops = stdio.getopt({ 'serve': {} });

var metalsmith = require('metalsmith');
var serve      = ops.serve ? require('metalsmith-serve') : function () { };
var markdown   = require('metalsmith-markdown');
var templates  = require('metalsmith-templates');
var Handlebars = require('handlebars');
var fs         = require('fs');

var partials = fs.readdirSync(__dirname + '/templates/partials');

for (var i = 0; i < partials.length; i++) {
		Handlebars.registerPartial(partials[i].split('.')[0], fs.readFileSync(__dirname + '/templates/partials/' + partials[i]).toString());
}
	

/*Handlebars.registerPartial('article', fs.readFileSync(__dirname + 
'/templates/partials/article.html').toString());

Handlebars.registerPartial('posts', fs.readFileSync(__dirname + 
'/templates/partials/posts.html').toString());
*/
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