
var roole = require('roole'),
    path = require('path'),
    read = require('fs').readFileSync;

module.exports = function( builder ) {
  builder.hook('before styles', function( pkg ) {
    var styles = pkg.config.styles;
    
    if ( !styles ) return;

    styles.forEach(function( style ) {
      if ( '.roo' != path.extname( style ) ) return;

      roole.compile(read( pkg.path( style ), 'utf8' ), {}, function( err, css ) {
        if (err) return err;

        var newStyle = path.basename(style, '.roo') + '.css';

        pkg.removeFile( 'styles', style );
        pkg.addFile( 'styles', newStyle, css );
      });
    });
  });
};