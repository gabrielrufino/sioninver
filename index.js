'use strict'

function sioninver(object) {
  if ([undefined, null].includes(object)) {
    throw new Error('Parameter is empty')
  }

  if (object.__proto__ !== Object.prototype) {
    throw new TypeError('Parameter is not an object')
  }

  const entries = Object.entries(object)

  const values = entries.map(([, value]) => value)
  const uniqueValues = [...new Set(values)]

  if (values.length !== uniqueValues.length) {
    throw new Error('There are repetitions of values')
  }

  const inversion = entries.map(([key, value]) => ([value, key]))
  return Object.fromEntries(inversion)
}

module.exports = sioninver
