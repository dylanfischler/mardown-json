'use strict';

var fs = require('fs'),
	mdDataLayer = require('./mdDataLayer');

//Testing mdjsonlayer

fs.readFile( __dirname + '/test/test.md', (err, data) => {
  if (err) throw err;

  let result = mdDataLayer.create(data.toString());
  let markdown = mdDataLayer.readMD(result);

  // console.log("result", result);
  // console.log("markdown", markdown);
  console.log("I/O Equal", data.toString() === markdown);
});