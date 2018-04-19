# load-nextstep-plist [![Build Status](https://travis-ci.org/delucis/load-nextstep-plist.svg?branch=master)](https://travis-ci.org/delucis/load-nextstep-plist)

> Read and parse a NeXTSTEP property list file

Loads property list files that follow the NeXTSTEP “plain text” format. Also works with other file formats that use the same syntax, such as the `.glyphs` files used for the [Glyphs](http://glyphsapp.com/) font editor.

## Install

```
npm install --save load-nextstep-plist
```

## Usage

```js
const LOAD_PLIST = require('load-nextstep-plist')

LOAD_PLIST('test.plist')
	.then(data => {
		console.log(data)
		// => { foo: 'bar' }
	})
```

## API

### loadNextstepPlist(filepath)

Returns a promise for the parsed property list file.

### loadNextstepPlist.sync(filepath)

Returns the parsed property list file.

```js
const LOAD_PLIST = require('load-nextstep-plist')

console.log(LOAD_PLIST.sync('test.plist'))
// => { foo: 'bar' }
```

## Acknowledgements

Parsing is accomplished using Chee’s [`nextstep-plist`](https://www.npmjs.com/package/nextstep-plist) module.

This module is modelled on Sindre Sorhus’s [`load-json-file`](https://github.com/sindresorhus/load-json-file).

## License

This software is free to use, modify, and redistribute under a [GNU General Public License](http://www.gnu.org/licenses/gpl-3.0.txt).
