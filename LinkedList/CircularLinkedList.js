class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class CL {
  constructor() {
    this.head = null
  }

  insert(data) {
    if (this.head === null) {
      this.head = new Node(data, this.head);
      const p = this.head;
      p.next = this.head;
      return;
    }
    let head = this.head;
    let start = this.head;
    while(start.next != head) {
      start = start.next;
    }
    start.next = new Node(data, head);
    // start = start.next;
    // start.next = head;
  }
}


const cl = new CL();

cl.insert(1);
cl.insert(2);
cl.insert(2);
console.log(cl);
