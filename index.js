
/**
 * Module dependencies.
 */

var compile = require('roole').compile
var read = require('fs').readFileSync
var path = require('path')
var basename = path.basename
var extname = path.extname

/**
 * Expose `build`.
 */

module.exports = build

/**
 * Hook into builder.js and compile roole files.
 *
 * @param {Object} builder
 */

function build(builder) {
  builder.hook('before styles', function (pkg) {
    var styles = pkg.config.styles
    
    // component has no styles? return.
    if (!styles) return;

    styles.forEach(function(style) {
      if ('.roo' != extname(style)) return;

      var src = read(pkg.path(style), 'utf8')

      // compile each .roo file individually to css.

      compile(src, {}, function(err, css) {
        if (err) return err;

        var name = basename(style, '.roo') + '.css'

        pkg.removeFile('styles', style)
        pkg.addFile('styles', name, css)
      });
    });
  });
};