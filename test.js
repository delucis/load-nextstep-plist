import path from 'path'
import test from 'ava'
import loadGlyphs from './'

const testFile = path.join(__dirname, 'test.glyphs')

test('async', async test => {
  const data = await loadGlyphs(testFile)
  test.is(data.familyName, 'Test Font')
})

test('sync', test => {
  test.is(loadGlyphs.sync(testFile).familyName, 'Test Font')
})
