//O(1) time | O(1) space because there is a finite number of solutions
function validIPAddresses(string) {

    const results = []
    
    if (string.length < 4) return []
  
    let i = 1;
    while (i < 4) {
      let k = string.length - 1;
      while (k > string.length - 4) {
        for (let j = i+1; j < string.length-1; j++) {
            let first = string.slice(0, i);
            let second = string.slice(i, j);
            let third = string.slice(j, k);
            let fourth = string.slice(k);
            ////////////////////////////////////////////////////////
            if (first.length > 1 && first[0] !== '0' || first.length === 1) {
              if (Number(first) <= 255) {
                //second
                if (second.length > 1 && second[0] !== '0' || second.length === 1) {
                  if (Number(second) <= 255) {
                    //third
                    if (third.length > 1 && third[0] !== '0' || third.length === 1) {
                      if (Number(third) <= 255) {
                        //fourth
                        if (fourth.length > 1 && fourth[0] !== '0' || fourth.length === 1) {
                          if (Number(fourth) <= 255) {
                            let copy = ''
                            copy+= first + '.'
                            copy+= second + '.'
                            copy+= third + '.'
                            copy+= fourth
                            results.push(copy)
                          }
                        }
                        ////////////////////////////////////////////////////////////////
                      }
                    }
                    ////////////////////////////////////////////////////////////////
                  }
                }
                ////////////////////////////////////////////////////////////////
              }
            }
            ////////////////////////////////////////////////////////////////
        }
        k--;
      }
      i++;
    }
    
    
    return results;
  }
  
  