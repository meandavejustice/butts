var fs = require('fs');
var path = require('path');
var ls = require('ls-stream');

var bootys = [];

function genButtLoad(success) {
  ls(path.resolve(__dirname + '/pants'))
    .on('data', function(dat) {
      bootys.push(dat.path);
    }).on('end', function() {
      success();
    });
}

module.exports = function(cb) {
  if (!cb) {
    throw new Error('You need a callback to access these butts!');
  }

  genButtLoad(function() {
    fs.createReadStream(bootys[Math.floor(Math.random() * bootys.length)])
      .on('data', function(azz) {
        cb(azz);
      });
  });
};

module.exports.buttStream = function(cb) {
  if (!cb) {
    throw new Error('You need a callback to access this butt stream!');
  }

  genButtLoad(function() {
    bootys.forEach(function() {
      fs.createReadStream(bootys[Math.floor(Math.random() * bootys.length)])
        .on('data', function(azz) {
          cb(azz);
        });
    });
  });
};
