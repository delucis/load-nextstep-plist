import path from 'path'
import test from 'ava'
import loadPlist from './'

const testFile = path.join(__dirname, 'test.plist')

test('async', async test => {
  const data = await loadPlist(testFile)
  test.is(data.unquotedString, 'works')
  test.is(data.quotedString, 'it works')
  test.true(Array.isArray(data.array))
  test.is(data.array[1], 'and works')
  test.true(typeof data.object === 'object')
  test.true(data.object.hasOwnProperty('array'))
})

test('sync', test => {
  const data = loadPlist.sync(testFile)
  test.is(data.unquotedString, 'works')
  test.is(data.quotedString, 'it works')
  test.true(Array.isArray(data.array))
  test.is(data.array[1], 'and works')
  test.true(typeof data.object === 'object')
  test.true(data.object.hasOwnProperty('array'))
})
