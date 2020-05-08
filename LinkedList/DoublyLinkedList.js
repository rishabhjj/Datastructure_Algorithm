class Node {
  constructor(data, previous = null, next = null) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class DLL {
  constructor() {
    this.head = null
  }

  insertAtEnd(data) {
    if (this.head === null) {
      this.insertAtBeginning(data);
      return;
    }
    const head = this.head;
    const start = this.head;
    while(start.next !=null) {
      start = start.next;
    }
    const newNode = new Node(data, null, null)
    start.next = newNode;
    newNode.previous = start;
    this.head = start;
  }
  insertAtBeginning(data) {
    if (this.head === null) {
      this.head = new Node(data, null, null);
      return;
    }
    const head = this.head;
    const newNode = new Node(data, null, null);
    newNode.next = head;
    head.previous = newNode;
    this.head = newNode;
  }
  insertAtIndex(data, index) {
    let count = 0;
    let list = this.head;
    let current = this.head;
    let previous = null;
    while(count < index) {
      previous = current;
      current = current.next;
      count ++;
    }
    let newNode = new Node(data, null, null);
    previous.next = newNode;
    newNode.previous = previous;
    newNode.next = current;
    current.previous = newNode

  }
  deleteFromStart() {
  if (this.head === null) {
    return;
  }
  this.head = this.head.next;
  }
  deleteFromEnd() {
  // similar to insert at end with pointer 2nd last node with null

  }
}

const dll = new DLL();
dll.insertAtEnd(10);
dll.insertAtEnd(5)
// dll.insertAtBeginning(1);
// dll.insertAtBeginning(2);
// dll.insertAtBeginning(3);

dll.insertAtIndex(3, 1);
// console.log(JSON.stringify(dll));
// dll.deleteFromStart();
console.log(dll);