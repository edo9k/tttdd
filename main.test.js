/** @format */

const { sum, isBool, validateId } = require('./main')

describe('tests sum function', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

describe('tests validateId function', () => {
  it('check that variable is boolean', () => {
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
})

describe('tests validateId function', () => {
  it('check that variable is valid UUID', () => {
    //expect(validateId(true)).toBe(false) // must be string, error!
    expect(validateId('')).toBe(false)
    expect(validateId()).toBe(false)
    expect(validateId(null)).toBe(false)
    expect(validateId(undefined)).toBe(false)
    expect(validateId(1)).toBe(false)
    expect(validateId(0)).toBe(false)
    expect(validateId()).toBe(false)
    expect(validateId('123e4567-e89b-12d3-a456-426655440000')).toBe(true)
  })
})
