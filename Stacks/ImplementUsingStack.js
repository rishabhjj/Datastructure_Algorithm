
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LL {
  constructor() {
    this.top = null;
  }

  push(val) {
    const temp = new Node(val, this.top);
    this.top = temp;
  }
  pop() {
    if (this.top === null) return;
    this.top = this.top.next;
  }
}

const ll = new LL();

ll.push(1);
ll.push(2);
ll.push(3);
console.log(JSON.stringify(ll));
ll.pop();
console.log(JSON.stringify(ll));

