/**
 *
 * @param {Array} metadata 元数据
 * @param {String} id 父标识字段名
 * @param {String} pid 子标识字段名
 */
function totree(metadata) {
  if (!metadata) {
    return []
  }
  var map = toMap(metadata)
  var arr = []
  var rootIndex
  for (let k in map) {
    arr.push(k)
  }
  rootIndex = Math.min.apply(Math, arr)
  return findNodes(map[rootIndex], map)
}

function toMap(metadata) {
  var map = {}
  metadata.map((val, index) => {
    if (!map.hasOwnProperty(val.pid)) {
      map[val.pid] = [val]
    } else {
      map[val.pid].push(val)
    }
  })
  return map
}

function findNodes(arr, map) {
  arr.map(function (val, index) {
    if (map[val.id]) {
      //  存在子节点
      val.children = map[val.id]
      findNodes(val.children, map)
    }
  })
  return arr
}
export default totree