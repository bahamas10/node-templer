var assert = require('assert');

var templer = require('../');

var tests = [
  {
    s: 'hello {{foo}}',
    d: {foo: 'world'},
    e: 'hello world'
  },
  {
    s: 'hello {{foo}}',
    d: {},
    e: 'hello {{foo}}'
  },
  {
    s: '{{0}} {{1}} {{2}}',
    d: ['foo', 'bar', 'baz'],
    e: 'foo bar baz'
  },
  {
    s: '{{some-var_thing}}!!',
    d: {'some-var_thing': 'yay'},
    e: 'yay!!'
  },
];

tests.forEach(function (t) {
  var actual = templer(t.s, t.d);
  var expected = t.e;

  assert.equal(actual, expected);
});
