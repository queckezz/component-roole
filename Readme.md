# component-roole

Seemlessly use stylus in your components.

## Installation
```
npm install component-roole
```

## Usage

**component.json**
```javascript
{
  ...
  "styles": [
    "dialog.roo",
    "navbar.roo"
  ]
  ...
}
```

```javascript

var Builder = require('component-builder'),
    write = require('fs').writeFileSync,

  roole = require('component-roole');

module.exports = function( req, res, next ) {
  var builder = new Builder('.');
  builder.copyAssetsTo('public');

  builder.use( roole );
  
  builder.build(function( err, res ){
    if ( err ) return next( err );
    write( 'public/app.js', res.require + res.js );
    write( 'public/app.css', res.css );
    next();
  });
};
```
