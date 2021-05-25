//Write a function that returns the sum of values in an array however each value is multiplied by the depth they are nested.

function productSum(array) {
      const productHelper = (array, depth) => {
          let sum = 0;
          for (let element of array) {
              if (typeof element === "number") sum+= element;
              else sum+= productHelper(element, depth+1);
          }
          return depth * sum;
      }
      return productHelper(array, 1);
  }
  //O(n) time where n is the number of values being added | O(d) space where d is the depth of the depest array