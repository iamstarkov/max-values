# max-values

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> identify maximum values within object properties in array

## Install

    npm install --save max-values

## Usage

```js
import maxValues from 'max-values';

const input = [{ name: 'Bob',   age: 25, skills: { crypto: 1  }},
               { name: 'Some',  age: 14, skills: { crypto: 5 }},
               { name: 'Alice', age: 7,  skills: { crypto: 10 }}]

maxValues(input, ['age', 'skills.crypto']);
  // [{ name: 'Bob',   age: 25, skills: { crypto: 1  }, maxAge: true },
  //  { name: 'Some',  age: 14, skills: { crypto: 5 }},
  //  { name: 'Alice', age: 7,  skills: { crypto: 10 }, maxSkillsCrypto: true }]
```

## API

### maxValues(arr, props)

Return `Array` of the almost the same `Objects`. New objects will have new `maxProp: true` field, if this object has the maximum value for this prop amongst all the objects.

#### arr

*Required*  
Type: `Array` of `Objects`  
Example: `[{ age: 16 }, { age: 18 }]`

Objects with similar structure.

#### props

*Required*  
Type: `Array` of props `String`  
Example: `['age', 'skills.cryptography']`

Properties for which you want to find maximum values. Nested properties should be defined with dot notation. Resulting name for maxProps is prepended by 'max' and camelcased `prop`:

```
age => maxAge
skills.cryptography => maxSkillsCryptography
```

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/max-values
[npm-image]: https://img.shields.io/npm/v/max-values.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/max-values
[travis-image]: https://img.shields.io/travis/iamstarkov/max-values.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/max-values
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/max-values.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/max-values
[depstat-image]: https://david-dm.org/iamstarkov/max-values.svg?style=flat-square
