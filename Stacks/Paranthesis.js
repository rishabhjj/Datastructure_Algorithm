function paranthesis(arr) {
  let top = -1;
  let n = arr.length;
  let stack = [];
  try {
    for (let i =0; i< n; i++) {
      if (arr[i] === '[' || arr[i] === '{'  || arr[i] === '(' ) {
        stack[++top] = arr[i];
      } else if (arr[i] === ']' || arr[i] === '}'  || arr[i] === ')') {
        if (top === -1) {
          return false;
        }
        if (arr[i] === ']') {
          if (stack[top] != '[') {
            console.log("Not Balanced")
            return;
          } else {
            stack.pop();
            top --;
          }
        }
        if (arr[i] === ')') {
          if (stack[top] != '(') {
            console.log("Not Balanced")
            return;
          } else {
            stack.pop();
            top --;
          }
        }
        if (arr[i] === '}') {
          if (stack[top] != '{') {
            console.log("Not Balanced")
            return;
          } else {
            stack.pop();
            top --;
          }
        }
      }
    }
    if (stack.length) {
      console.log("Not Balanced")
    } else console.log("Balanced")
  } catch (e) {
    throw e;
  }
}

paranthesis('[{}]')