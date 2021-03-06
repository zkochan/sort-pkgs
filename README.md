# sort-pkgs

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
    manifest: {
      name: 'foo',
      version: '1.0.0',
    },
    dependencies: ['bar@2.0.0', 'qar@3.0.0']
  },
  'bar@2.0.0': {
    manifest: {
      name: 'bar',
      version: '2.0.0',
    },
    dependencies: []
  },
  'qar@3.0.0': {
    manifest: {
      name: 'qar',
      version: '3.0.0',
    },
    dependencies: ['bar@2.0.0']
  },
})

console.log(pkgs)
//> [
//    {
//      manifest: {
//        name: 'bar',
//        version: '2.0.0',
//      },
//      dependencies: []
//    },
//    {
//      manifest: {
//        name: 'qar',
//        version: '3.0.0',
//      },
//      dependencies: ['bar@2.0.0']
//    },
//    {
//      manifest: {
//        name: 'foo',
//        version: '1.0.0',
//      },
//      dependencies: ['bar@2.0.0', 'qar@3.0.0']
//    }
//  ]
```

## Related

* [find-packages](https://github.com/zkochan/find-packages) - Find all packages inside a directory
* [pkgs-graph](https://github.com/zkochan/pkgs-graph) - Create a graph from an array of packages

## License

[MIT](LICENSE) © [Zoltan Kochan](http://kochan.io)
