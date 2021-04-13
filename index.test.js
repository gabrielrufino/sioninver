const { deepStrictEqual, throws } = require('assert')

const sioninver = require('.')

function log(string) {
  process.stdout.write(string)
}

{
  log('Should invert an object correctly')

  const object = {
    '201': 'Created',
    '404': 'Not Found',
    '500': 'Server Error'
  }

  const expected = {
    'Created': '201',
    'Not Found': '404',
    'Server Error': '500'
  }

  const inveterd = sioninver(object)
  deepStrictEqual(inveterd, expected)

  log(' [Pass]\n\r')
}

{
  log('Should throw an error when does not receives the parameter')

  throws(
    () => {
      const inverted = sioninver()
    },
    {
      name: 'Error',
      message: 'Parameter is empty'
    }
  )

  log(' [Pass]\n\r')
}

{
  log('Should throw an error when receives an non object parameter')

  throws(
    () => {
      const inverted = sioninver(true)
    },
    {
      name: 'TypeError',
      message: 'Parameter is not an object'
    }
  )

  throws(
    () => {
      const inverted = sioninver(1)
    },
    {
      name: 'TypeError',
      message: 'Parameter is not an object'
    }
  )

  throws(
    () => {
      const inverted = sioninver('Gabriel Rufino')
    },
    {
      name: 'TypeError',
      message: 'Parameter is not an object'
    }
  )

  throws(
    () => {
      const inverted = sioninver(['Apple', 'Banana', 'Orange'])
    },
    {
      name: 'TypeError',
      message: 'Parameter is not an object'
    }
  )

  log(' [Pass]\n\r')
}

{
  log('Should throw an error when receives non unique values')

  const object = {
    '001': 'Gabriel Rufino',
    '002': 'Erick Wendel',
    '003': 'Elon Musk',
    '004': 'Lewis Hamilton',
    '005': 'Gabriel Rufino'
  }

  throws(
    () => {
      const inverted = sioninver(object)
    },
    {
      name: 'Error',
      message: 'There is some repetition of values'
    }
  )

  log(' [Pass]\n\r')
}

{
  log('Should throw an error when receives non-string or non-numeric values')

  throws(
    () => {
      const inverted = sioninver({
        'BR': 'Portuguese',
        'US': 'English',
        'CA': [
          'English',
          'French'
        ]
      })
    },
    {
      name: 'TypeError',
      message: 'There is some non-string or non-numeric value'
    }
  )

  throws(
    () => {
      const inverted = sioninver({
        '001': 'Gabriel Rufino',
        '002': {
          name: 'Erick Wendel',
          expertise: 'Node.js'
        }
      })
    },
    {
      name: 'TypeError',
      message: 'There is some non-string or non-numeric value'
    }
  )

  throws(
    () => {
      const inverted = sioninver({
        '001': true,
        '002': false
      })
    },
    {
      name: 'TypeError',
      message: 'There is some non-string or non-numeric value'
    }
  )

  log(' [Pass]\n\r')
}
