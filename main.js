/** @format */

const _ = require('lodash')
const validator = require('validator')

function sum(a, b) {
  return a + b
}

// cast permissive boolean checker sortof
const isBool = x => typeof x === 'boolean' || x === 'true' || x === 'false' || x === 0 || x === 1

const validateId = id => id && validator.isUUID(id)

module.exports = { sum, isBool, validateId }
