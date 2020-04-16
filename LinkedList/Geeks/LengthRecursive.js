class Node {
    constructor (data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LL {
    constructor (head = null) {
      this.head = head
    }
    insertAtBeginning(data) {
      this.head = new Node(data, this.head)
    }
  }

  function size(head) {
    if (head === null) {
      return 0;
    }
    return 1+ size(head.next);
  }

  const linkedlist = new LL();

  linkedlist.insertAtBeginning(0);
  linkedlist.insertAtBeginning(1);
  linkedlist.insertAtBeginning(0);
  linkedlist.insertAtBeginning(0);
  linkedlist.insertAtBeginning(1);
  linkedlist.insertAtBeginning(1);

  console.log(size(linkedlist.head))