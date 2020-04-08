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
    insertAtBeginning(data) {
      this.head = new Node(data, this.head);
      this.size += 1;
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
  
  function length(linkedList) {
      try {
          let list = linkedList.head;
          let count = 0;
        while(list) {
            count ++;
            list = list.next;
        }
        return count;
      } catch (e) {
        throw e;
      }
  }
  
  function findIntersection(linkedList1, linkedList2, l1Length, l2Lenth) {
      try {
        const diff = Math.abs(l1Length, l2Lenth);
        if (l1Length < l2Lenth) {
          for (let i = 0; i < diff -1 ; i++) {
            linkedList1.insertAtBeginning(0)
          }
        } else if (l1Length > l2Lenth) {
          for (let i = 0; i < diff -1 ; i++) {
            linkedList2.insertAtBeginning(0)
          } 
        }
        let ll1 = linkedList1.head;
        let ll2 = linkedList2.head;
        while (ll1 && ll2) {
          if (ll1.data === ll2.data) {
            return ll1.data;
          }
          ll2 = ll2.next;
          ll1 = ll1.next;
        }
      } catch (e) {
        throw e;
      }
  }
  const linkedList1 = new LinkedList();
  linkedList1.insertAtEnd(10);
  linkedList1.insertAtEnd(20);
  linkedList1.insertAtEnd(30);
  linkedList1.insertAtEnd(40);
  linkedList1.insertAtEnd(50);


  const linkedList2 = new LinkedList();
  linkedList2.insertAtEnd(5);
  linkedList2.insertAtEnd(7);
  linkedList2.insertAtEnd(9);
  linkedList2.insertAtEnd(40);
  linkedList2.insertAtEnd(50);

  const l1Length = length(linkedList1);
  const l2Lenth = length(linkedList2);
  const data = findIntersection(linkedList1, linkedList2, l1Length, l2Lenth);
  console.log(data)