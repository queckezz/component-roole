# component-roole

Use the awesome roole pre-processor in your [components](http://www.component.io).

## Installation

  $ npm install component-roole

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
var builder = new Builder('.')

builder.copyAssetsTo('build')

// Use plugin

builder.use(roole)

builder.build(function (err, res) {
  if (err) throw err;

  write('build/build.css', res.css)
})
```

## Test

  $ make