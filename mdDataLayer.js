'use strict';

var md = require('markdown-it')(),
	fs = require('fs'),
	rules = require('markdown-it-mdrenderer'),
	Renderer = require('markdown-it/lib/renderer');

//some configuration
var renderer = new Renderer();
renderer.rules = Object.assign({}, renderer.rules, rules);

module.exports = {};

/* Creates a noSQL ready object for markdown file
*  args [
*    mdContent: raw string markdown content
*    meta: any meta data with file (title, author, etc.)
*  ]
*/
module.exports.create = (mdContent, meta) => {
	let mdObj = {};
	mdObj.content = md.parse(mdContent);
	//parse plaintext 
	mdObj.plainText = parsePlain(mdObj.content);

	return Object.assign({}, meta, mdObj);
}

/* Reads a previously created MDObj and parses out markdown content
*  args [
*    mdObj: retrieved mdObj
*  ]
*/
module.exports.readMD = (mdObj) => {
	return renderer.render(mdObj.content, md.options, {});
}

const parsePlain = (tokens) => {
	let repReg = /[*`]/g;
	tokens.forEach((token) => {
		console.log(token.content.replace(repReg, ''));
	});
	return {};
};