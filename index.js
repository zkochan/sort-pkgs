'use strict'
const R = require('ramda')
const toposort = require('toposort')

module.exports = pkgsGraph => {
  const pkgRelations = R.unnest(
    R.map(
      R.apply((id, pkgNode) => R.xprod(pkgNode.dependencies, [id])),
      R.toPairs(pkgsGraph)
    )
  )
  const sortedPkgIds = toposort(pkgRelations)
  return R.props(sortedPkgIds, pkgsGraph)
}
