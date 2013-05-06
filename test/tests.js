
var assert = require('component-assert');
var toArray = require('data-uri-to-u8');

var canvas = document.createElement('canvas');
canvas.width = 5;
canvas.height = 5;
var ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, 5, 5);

describe('toArray(uri)', function(){
  it('should return a Uint8Array', function(){
    var uri = canvas.toDataURL();
    var arr = toArray(uri);
    var type = {}.toString.call(arr);
    assert('[object Uint8Array]' == type);
    assert('image/png' == arr.type, 'invalid .type');
  })
})
