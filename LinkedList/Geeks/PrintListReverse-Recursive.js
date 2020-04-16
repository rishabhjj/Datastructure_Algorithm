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

  function printReverse(linkedlist) {
    try {
        if (!linkedlist) {
            return;
        }

        printReverse(linkedlist.next);
        console.log(linkedlist.data)

        
    } catch (e) {
        throw e;
    }
  }
  const linkedlist = new LL();

  linkedlist.insertAtBeginning(9);
  linkedlist.insertAtBeginning(9);
  linkedlist.insertAtBeginning(9);
  linkedlist.insertAtBeginning(1);

  printReverse(linkedlist.head)