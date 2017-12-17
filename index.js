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
  const independentAndSortedPkgIds = R.concat(R.difference(R.keys(pkgsGraph), sortedPkgIds), sortedPkgIds)
  return R.props(independentAndSortedPkgIds, pkgsGraph)
}
