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
  
  const linkedList = new LinkedList();
  linkedList.insertAtEnd(120);
  linkedList.insertAtEnd(160);
  
  console.log(linkedList);