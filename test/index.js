'use strict';
var test = require('tape');
var sassVariables = require('../');

test('Test variables are translated correctly.', function t(assert) {
  var sassifiedOutput = sassVariables({
    color: 'red',
    url: 'https://example.com/',
    number: 5
  });

  var split = sassifiedOutput.split('\n');

  assert.equal(split[0], '$color: "red";', 'color is red');
  assert.equal(split[1], '$url: "https://example.com/";', 'url is real');
  assert.equal(split[2], '$number: 5;', 'number is 5');
  assert.notOk(split[3], 'extra object does not exist');
  assert.end();
});

test('Test output concatenates correctly.', function t(assert) {
  var sassifiedOutput = sassVariables({
    blue: '#0000FF'
  }, '.className { color: $blue; }');

  var split = sassifiedOutput.split('\n');

  assert.equal(split[0], '$blue: "#0000FF";', 'blue is blue');
  assert.equal(
    split[1],
    '.className { color: $blue; }',
    'extra content is preserved'
  );
  assert.notOk(split[2], '3rd object does not exist');
  assert.end();
});
