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

const input = [{ name: 'Bob',   age: 16, skills: { cryptography: 9 }},
               { name: 'Alice', age: 14, skills: { cryptography: 10 }}]

maxValues(input, ['age']);
  // [ { name: 'Bob',   age: 16, skills: { cryptography: 9 }, maxAge: true },
  //   { name: 'Alice', age: 14, skills: { cryptography: 10 }}]

maxValues(input, ['skills.cryptography']);
  // [ { name: 'Bob',   age: 16, skills: { cryptography: 9 }},
  //   { name: 'Alice', age: 14, skills: { cryptography: 10 }, maxSkillsCryptography: true}]

maxValues(); // undefined ¯\_(ツ)_/¯
```

## API

### maxValues(input, [options])

#### input

*Required*  
Type: `String`

Lorem ipsum.

#### options

##### foo

Type: `Boolean`  
Default: `false`

Lorem ipsum.

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
