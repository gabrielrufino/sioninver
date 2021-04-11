# sioninver

Inverses objects: turns keys into values ​​and values ​​and keys

### Getting started

```bash
$ npm install sioninver
```

**Inversion example:**

```js
const sioninver = require('sioninver')

const result = sioninver({
  '201': 'Created',
  '404': 'Not Found',
  '500': 'Server Error'
})

console.log(result)
/*
{
  'Created': '201',
  'Not Found': '404',
  'Server Error': '500'
}
*/
```
