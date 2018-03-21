/**
 *
 * @param {Array} metadata 元数据
 * @param {String} id 父标识字段名
 * @param {String} pid 子标识字段名
 */

function totree(metadata, id, pid, children) {
  id = id || 'id'
  pid = pid || 'pid'
  children = children || 'children'
  if (!metadata || metadata.length <= 0) {
    return []
  }
  var map = toMap(metadata, pid)
  var arr = []
  var rootIndex
  for (let k in map) {
    arr.push(k)
  }
  rootIndex = Math.min.apply(Math, arr)
  return findNodes(map[rootIndex], map, id, children)
}

function toMap(metadata, pid) {
  var map = {}
  metadata.map((val, index) => {
    if (!map.hasOwnProperty(val[pid])) {
      map[val[pid]] = [val]
    } else {
      map[val[pid]].push(val)
    }
  })
  return map
}

function findNodes(arr, map, id, children) {
  arr.map(function (val, index) {
    if (map[val[id]]) {
      //  存在子节点
      val[children] = map[val[id]]
      findNodes(val[children], map, id, children)
    }
  })
  return arr
}
module.exports = totree