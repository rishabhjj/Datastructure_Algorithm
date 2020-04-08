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

function evenOrOdd(linkedList) {
  try {
    let list = linkedList.head;
    while (1) {
      if (list === null) {
        console.log("Even Number of Elements");
        return;
      }
      if (list.next === null) {
        console.log("Odd Number of Elements");
        return;
      }
      list = list.next.next;
    }
  } catch (e) {
    throw e;
  }
}

const linkedList = new LinkedList();
linkedList.insertAtEnd(120);
linkedList.insertAtEnd(160);

evenOrOdd(linkedList)