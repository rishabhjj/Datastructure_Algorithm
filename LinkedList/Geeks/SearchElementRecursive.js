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

  function search(linkedlist, data) {
    try {
        if (linkedlist) {
            console.log(false);
            return;
        }
        console.log(linkedlist)
         if (linkedlist.data === data) {
            console.log(true);
            return;
        }

        return search(linkedlist.next);

        
    } catch (e) {
        throw e;
    }
  }
  const linkedlist = new LL();

  linkedlist.insertAtBeginning(9);
  linkedlist.insertAtBeginning(2);
  linkedlist.insertAtBeginning(3);
  linkedlist.insertAtBeginning(1);

  search(linkedlist.head, 3)