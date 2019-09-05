/** @format */

const { sum, isBool } = require('./main')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('check that variable is boolean', () => {
  expect(isBool(true)).toBe(true)
  expect(isBool('')).toBe(false)
  expect(isBool()).toBe(false)
  expect(isBool(null)).toBe(false)
  expect(isBool(undefined)).toBe(false)
  expect(isBool(1)).toBe(true)
  expect(isBool(0)).toBe(true)
  expect(isBool('true')).toBe(true)
  expect(isBool('false')).toBe(true)
})
