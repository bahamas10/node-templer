var assert = require('assert');

var templer = require('../');

var s = 'hello {{var1}}!';
var d = {
  var1: 'world'
};

var actual = templer(s, d);
var expected = 'hello world!';

assert.equal(actual, expected);
