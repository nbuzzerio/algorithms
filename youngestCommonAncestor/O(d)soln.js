class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }
//O(d) time where d is the depth of the ancestor | O(d) space
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    let d1 = descendantOne;
    let d2 = descendantTwo;
    const descs1 = {};
    const descs2 = {};
    descs1[d1.name] = d1;
    descs2[d2.name] = d2;
    if (d1 === d2) return d1;

    while (d1.ancestor !== null || d2.ancestor !== null) {
        if (d1.ancestor) {
            descs1[d1.ancestor.name] = d1
            if (descs2[d1.ancestor.name] === descs1[d1.ancestor.name]) return descs1[d1.ancestor.name]
            d1 = d1.ancestor
        }
        if (d2.ancestor) {
            descs2[d2.ancestor.name] = d2
            if (descs1[d2.ancestor.name] === descs2[d2.ancestor.name]) return descs2[d2.ancestor.name]
            d2 = d2.ancestor
        }
    }
    
    return topAncestor	
}