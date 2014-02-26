#!/usr/bin/env node

var butt = require('./');
var args = process.argv.splice(2);

if (args.indexOf('-a') !== -1 || args.indexOf('--all') !== -1) {
  butt.buttStream(function(bottom) {
    process.stdout.write(bottom.toString())
    return;
  })
}

butt(function(bottom) {
  process.stdout.write(bottom.toString());
})
