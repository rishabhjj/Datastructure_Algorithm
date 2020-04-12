var top = -1;
var stack = [];
function push(val) {
  stack[++top] = val;
}

function pop(val) {
  if (top === -1) {
    console.log('No Elements in Stack');
    return;
  }
  stack.pop(0, top-1);
  top --;
}

function getTop() {
  return stack[top];
}

function isEmpty() {
  if (top === -1) {
    console.log('Stack is Empty!!');
    return;
  }
  console.log('Stack is not Empty!!');
}

push(1);
push(2);
push(3);
console.log(stack, top);
pop();
console.log(stack, top);
getTop();
isEmpty();