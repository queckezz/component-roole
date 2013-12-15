
/**
 * Module dependencies.
 */

var Builder = require('component-builder')
var write = require('fs').writeFileSync
var join = require('path').join
var roole = require('..')

/**
 * Build roole files.
 */

var builder = new Builder('./test')

// Use plugin

builder.use(roole)

builder.build(function (err, res) {
  if (err) throw err;

  var dir = join(__dirname, 'build/build.css')

  write(dir, res.css)
})