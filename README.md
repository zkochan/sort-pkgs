# sort-pkgs

[![Greenkeeper badge](https://badges.greenkeeper.io/zkochan/sort-pkgs.svg)](https://greenkeeper.io/)

> Sort packages. Dependents first.

[![Build Status](https://img.shields.io/travis/zkochan/sort-pkgs/master.svg)](https://travis-ci.org/zkochan/sort-pkgs) [![npm version](https://img.shields.io/npm/v/sort-pkgs.svg)](https://www.npmjs.com/package/sort-pkgs)

## Installation

```
npm i -g sort-pkgs
```

## Usage

```js
const sortPkgs = require('sort-pkgs')

const pkgs = sortPkgs({
  'foo@1.0.0': {
    name: 'foo',
    version: '1.0.0',
    dependencies: ['bar@2.0.0', 'qar@3.0.0']
  },
  'bar@2.0.0': {
    name: 'bar',
    version: '2.0.0',
    dependencies: []
  },
  'qar@3.0.0': {
    name: 'qar',
    version: '3.0.0',
    dependencies: ['bar@2.0.0']
  },
})

console.log(pkgs)
//> [
//    {
//      name: 'bar',
//      version: '2.0.0',
//      dependencies: []
//    },
//    {
//      name: 'qar',
//      version: '3.0.0',
//      dependencies: ['bar@2.0.0']
//    },
//    {
//      name: 'foo',
//      version: '1.0.0',
//      dependencies: ['bar@2.0.0', 'qar@3.0.0']
//    }
//  ]
```

## Related

* [find-packages](https://github.com/zkochan/find-packages) - Find all packages inside a directory
* [pkgs-graph](https://github.com/zkochan/pkgs-graph) - Create a graph from an array of packages

## License

[MIT](LICENSE) © [Zoltan Kochan](http://kochan.io)
