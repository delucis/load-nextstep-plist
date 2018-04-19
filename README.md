# load-glyphs-file [![Build Status](https://travis-ci.org/delucis/load-glyphs-file.svg?branch=master)](https://travis-ci.org/delucis/load-glyphs-file)

> Read and parse a `.glyphs` font file

## Install

```
npm install --save load-glyphs-file
```

## Usage

```js
const LOAD_GLYPHS = require('load-glyphs-file')

LOAD_GLYPHS('my-font.glyphs')
	.then(data => {
		console.log(data)
		// => { familyName: 'My Font', ... }
	})
```

## API

### loadGlyphsFile(filepath)

Returns a promise for the parsed `.glyphs` file.

### loadGlyphsFile.sync(filepath)

Returns the parsed `.glyphs` file.

```js
const LOAD_GLYPHS = require('load-glyphs-file')

console.log(LOAD_GLYPHS.sync('my-font.glyphs'))
// => { familyName: 'My Font', ... }
```

## See also

- `write-glyphs-file` — Stringify and write a Javascript object to a `.glyphs` property list

## Acknowledgements

The structure for this module is modelled on Sindre Sorhus’s [`load-json-file`](https://github.com/sindresorhus/load-json-file).

## License

This software is free to use, modify, and redistribute under a [GNU General Public License](http://www.gnu.org/licenses/gpl-3.0.txt).
