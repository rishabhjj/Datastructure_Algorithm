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

function middleOfLinkedList(linkedList) {
  try {
    let first = linkedList.head;
    let second = linkedList.head;
    while(second && second.next) {
      first = first.next;
      second = second.next.next;
    }
    return first;
  } catch (e) {

  }
}
const linkedList = new LinkedList();
linkedList.insertAtEnd(120);
linkedList.insertAtEnd(160);
linkedList.insertAtEnd(200);

console.log(middleOfLinkedList(linkedList));