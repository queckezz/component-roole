# component-roole

Seemlessly use the roole pre-processor in your [components](http://www.component.io).

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

**builder.js**
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
    write( 'public/app.css', res.css );
    next();
  });
};
```
