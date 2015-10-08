node-templr
===========

Insanely simple JavaScript string templating system

Usage
-----

``` js
var templer = require('templer');

var s = 'hello {{name}}, the year is {{year}}';
var data = {
  name: 'dave',
  year: new Date().getFullYear()
};

var rendered = templer(s, data);
// => "hello dave, the year is 2015"
```

Installation
------------

    npm install templer

License
-------

MIT License
