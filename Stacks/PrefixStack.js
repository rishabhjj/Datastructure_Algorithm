function preFix(arr) {
    try {
      const n = arr.length;
      const stack = [];
      let top = -1;
      for (let i = n-1; i>= 0; i--) {
        if (!isNaN(Number(arr[i]))) {
          stack[++top] = Number(arr[i]);
        } else {
          let one = stack.pop();
          let two = stack.pop();
          top = top - 2;
          let operator = arr[i]
          switch (operator) {
            case '+' : stack[++top] = one + two; break;
            case '-' : stack[++top] = one - two; break;
            case '*' : stack[++top] = one * two; break;
            case '/' : stack[++top] = one / two; break;
          }
        }
      }
      console.log(stack.pop())
    } catch (e) {
      throw e;
    }
  }
  
  preFix('-+*23*549')