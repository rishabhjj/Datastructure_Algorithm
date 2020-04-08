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

  function reverseLinkedList(linkedList) {
      try {
        let start = linkedList.head;
        let previous = null;
        let next = null;
        while(start) {
          next = start.next;
          start.next = previous;
          previous = start;
          start = next;
        }
        linkedList.head = previous;
        return linkedList;
      } catch (e) {
          throw e;
      }
  }
  
  const linkedList = new LinkedList();
  linkedList.insertAtEnd(120);
  linkedList.insertAtEnd(160);
  linkedList.insertAtEnd(200);
  linkedList.insertAtEnd(240);

  
  console.log(JSON.stringify(reverseLinkedList(linkedList)));