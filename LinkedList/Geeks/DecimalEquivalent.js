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

  function reverse(linkedlist) {
    try {
      let previous = null;
      let next = null;
      let start = linkedlist.head;
      while(start) {
        next = start.next;
        start.next = previous;
        previous = start;
        start = next;
      }
      linkedlist.head = previous;
      return linkedlist;
    } catch (e) {

    }
  }
  function findDecimal(ll) {
    try {
      let reverseLL = reverse(ll).head;
      let count = 0;
      let res = 0;
      while(reverseLL) {
        res = res + Math.pow(2,count) * reverseLL.data;
        reverseLL = reverseLL.next;
        count ++;
      }
      console.log(res)
    } catch (e) {
      throw e;
    } 
  }
  const linkedlist = new LL();

  linkedlist.insertAtBeginning(0);
  linkedlist.insertAtBeginning(1);
  linkedlist.insertAtBeginning(0);
  linkedlist.insertAtBeginning(0);
  linkedlist.insertAtBeginning(1);
  linkedlist.insertAtBeginning(1);

  findDecimal(linkedlist);