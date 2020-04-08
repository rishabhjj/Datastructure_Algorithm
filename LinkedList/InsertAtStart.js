class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertAtBeginning(data) {
    this.head = new Node(data, this.head);
    this.size += 1;
  }
}

const linkedList = new LinkedList();
linkedList.insertAtBeginning(120);
linkedList.insertAtBeginning(160);

console.log(linkedList);