'use strict'
const sortPkgs = require('sort-pkgs')
const test = require('tape')
const R = require('ramda')

test('simple example', t => {
  const pkgs = sortPkgs({
    'foo@1.0.0': {
      manifest: {
        name: 'foo',
        version: '1.0.0',
      },
      dependencies: ['bar@2.0.0', 'qar@3.0.0'],
    },
    'bar@2.0.0': {
      manifest: {
        name: 'bar',
        version: '2.0.0',
      },
      dependencies: [],
    },
    'qar@3.0.0': {
      manifest: {
        name: 'qar',
        version: '3.0.0',
      },
      dependencies: ['bar@2.0.0'],
    },
  })
  t.deepEqual(R.map(R.path(['manifest', 'name']), pkgs), ['bar', 'qar', 'foo'], 'packages are in correct order')
  t.end()
})

test('throw error if on circular dependencies', t => {
  t.throws(() => sortPkgs({
    'foo@1.0.0': {
      manifest: {
        name: 'foo',
        version: '1.0.0',
      },
      dependencies: ['bar@2.0.0']
    },
    'bar@2.0.0': {
      manifest: {
        name: 'bar',
        version: '2.0.0',
      },
      dependencies: ['foo@1.0.0']
    }
  }), 'fails on circular deps')
  t.end()
})
