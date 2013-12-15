# component-roole

Use the awesome roole pre-processor in your [components](http://www.component.io).

## Installation

	$ npm install component-roole

## Usage

Add the roole plugin through `builder.use()`

```javascript
var builder = new Builder('.')

builder.copyAssetsTo('build')

// Use plugin

builder.use(roole)

builder.build(function (err, res) {
  if (err) throw err;

  write('build/build.css', res.css)
})
```
and use it in your components!

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

## Test

	$ make
    
or simply run 

	$ node test/build.js