function sioninver(object) {
  if ([undefined, null].includes(object)) {
    throw new Error('Parameter is empty');
  }

  if (Object.getPrototypeOf(object) !== Object.prototype) {
    throw new TypeError('Parameter is not an object');
  }

  const entries = Object.entries(object);

  const values = entries.map(([, value]) => value);

  if (!values.every(
    (value) => [String.prototype, Number.prototype].includes(Object.getPrototypeOf(value)),
  )) {
    throw new TypeError('There is some non-string or non-numeric value');
  }

  const uniqueValues = [...new Set(values)];
  if (values.length !== uniqueValues.length) {
    throw new Error('There is some repetition of values');
  }

  const inversion = entries.map(([key, value]) => ([value, key]));
  return Object.fromEntries(inversion);
}

module.exports = sioninver;
