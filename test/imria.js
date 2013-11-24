var assert = require('assert');
var imria = require('../lib/imria.js');


assert.equal(
	imria.hello(),
	'hello imria',
	'Expected "hello imria". Got "'+imria.hello()+'"'
	)