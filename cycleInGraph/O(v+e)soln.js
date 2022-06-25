//O(v+e) time | O(v) space
function cycleInGraph(edges) {
    const search = (node, j) => {
      let found = false
      for (let i = 0; i < node.length; i++) {
        if (visited[node[i]]) return true
        else {
          visited[node[i]] = true;
        }
        found = search(edges[node[i]], node[i])
        if (found) return true
      }
      delete visited[j]
      return found
    }
    
    let visited = {}
  
    for (let i = 0; i < edges.length; i++) {
      visited[i] = true
      if (search(edges[i])) return true
      visited = {}
    }
    
    return false;
}