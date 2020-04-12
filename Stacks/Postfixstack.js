function postFix(arr) {
  try {
    const n = arr.length;
    const stack = [];
    let top = -1;
    for (let i =0; i< n; i++) {
      if (!isNaN(Number(arr[i]))) {
        stack[++top] = Number(arr[i]);
      } else {
        let one = stack.pop();
        let two = stack.pop();
        top = top - 2;
        let operator = arr[i]
        switch (operator) {
          case '+' : stack[++top] = two + one; break;
          case '-' : stack[++top] = two - one; break;
          case '*' : stack[++top] = two * one; break;
          case '/' : stack[++top] = two / one; break;
        }
      }
    }
    console.log(stack.pop())
  } catch (e) {
    throw e;
  }
}

postFix('64*')