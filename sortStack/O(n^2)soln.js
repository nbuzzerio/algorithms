//O(n^2) time | O(n) space
function sortStack(stack) {
  
    const insert = (stack, a) => {
      let b;
      if (stack.length > 0) {
        b = stack.pop()
        if (b < a) {
          stack.push(b)
        } else {
          insert(stack, a)
          a = b
        }
      }
      stack.push(a)
    }
  
    const sort = (stack) => {
      let popped;
      if (stack.length > 0) {
        popped = stack.pop()
        sort(stack)
        insert(stack, popped)
      }
    }
  
    sort(stack)
    
    return stack;
  }