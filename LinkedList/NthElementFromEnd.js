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
  insertAtEnd(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.size +=1;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size +=1;
  }
}

function nthElement(linkedList, n) {
  try {
    let first = linkedList.head;
    let second = linkedList.head;
    let counter = 1;
    while (counter <= n-1) {
      counter ++;
      second = second.next;
    }
    while (second.next) {
      first = first.next;
      second =second.next;
    }
    return first.data;
  } catch (e) {
    throw e;
  }
}
const linkedList = new LinkedList();
linkedList.insertAtEnd(120);
linkedList.insertAtEnd(160);
linkedList.insertAtEnd(200);
linkedList.insertAtEnd(240);
linkedList.insertAtEnd(300);

console.log(nthElement(linkedList, 3));