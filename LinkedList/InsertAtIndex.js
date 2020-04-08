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
    insertAtIndex(data, index) {
      if (index === 0 || this.size === 0) {
        this.head = new Node(data, this.head);
        this.size += 1;
        return;
      }
      let current = this.head;
      let count = 0, previous;
      const node = new Node(data);
      while (count < index) {
        previous = current;
        count ++ ;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
      this.size += 1;
    }
    

    printList() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  const linkedList = new LinkedList();
  linkedList.insertAtIndex(120, 1);
  linkedList.insertAtIndex(160, 1);
  linkedList.insertAtIndex(200, 1);
  linkedList.insertAtIndex(240, 1);
  linkedList.insertAtIndex(280, 2);
  linkedList.insertAtIndex(300, 4);

  linkedList.printList();
