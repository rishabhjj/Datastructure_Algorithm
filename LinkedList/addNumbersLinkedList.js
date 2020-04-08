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

  function addNumbers(linkedList1, linkedList2, l1Length, l2Lenth) {
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
        let ll1 = reverseLinkedList(linkedList1).head;
        let ll2 = reverseLinkedList(linkedList2).head;
        const newList = new LinkedList();
        let carry = 0;
        let remainder = 0;
        let x = 0;
        while(ll1 && ll2) {
            let add = ll1.data + ll2.data + carry;
            if (parseInt(add / 10)) {
                remainder =  add % 10;
                carry = 1;
                newList.insertAtEnd(remainder)
            } else {
                newList.insertAtEnd(add);
                carry = 0;
            }
            ll1 = ll1.next;
            ll2 = ll2.next;
        }
        if (carry) {
            newList.insertAtEnd(carry);
        }
        console.log(JSON.stringify(reverseLinkedList(newList)));
      } catch (e) {
        throw e;
      }
  }
  const linkedList1 = new LinkedList();
  linkedList1.insertAtEnd(7);
  linkedList1.insertAtEnd(8);
  linkedList1.insertAtEnd(7);
  linkedList1.insertAtEnd(4);
  linkedList1.insertAtEnd(4);

  const linkedList2 = new LinkedList();
  linkedList2.insertAtEnd(9);
  linkedList2.insertAtEnd(6);
  linkedList2.insertAtEnd(3);

  const l1Length = length(linkedList1);
  const l2Lenth = length(linkedList2);
  const data = addNumbers(linkedList1, linkedList2, l1Length, l2Lenth);
  console.log(data)