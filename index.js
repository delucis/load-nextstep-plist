const UTIL = require('util')
const FS = require('graceful-fs')
const STRIP_BOM = require('strip-bom')
const PARSE_PLIST = require('nextstep-plist').parse

const PARSE = data => PARSE_PLIST(STRIP_BOM(data))

module.exports = fp => UTIL.promisify(FS.readFile)(fp, 'utf8').then(data => PARSE(data))
module.exports.sync = fp => PARSE(FS.readFileSync(fp, 'utf8'))
