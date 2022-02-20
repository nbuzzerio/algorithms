class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }
  //O(d) time where d is the depth of the ancestor | O(1) space
  function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
      let d1 = descendantOne;
      let d2 = descendantTwo;
      let d1Height = 0;
      let d2Height = 0;
  
      while (d1 !== topAncestor) {
          d1 = d1.ancestor;
          d1Height++;
      }
      while (d2 !== topAncestor) {
          d2 = d2.ancestor;
          d2Height++;
      }
      d1 = descendantOne;
      d2 = descendantTwo;
      let i = 0;
      while (d1 !== d2) {
          console.log('Round ', i, ': ', 'd1: ', d1.name, 'd1H: ', d1Height, 'd2: ', d2.name, 'd2H: ', d2Height)
          if (d1Height < d2Height && d2.ancestor) {
              d2Height--;
              d2 = d2.ancestor;
          } else if (d2Height < d1Height && d1.ancestor) {
              d1Height--;
              d1 = d1.ancestor;
          } else {
              d2 = d2.ancestor;
              d1 = d1.ancestor;			
          }
          i++
      }
      return d1
  }