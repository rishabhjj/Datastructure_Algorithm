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
  
  function removeDuplicatesSorted(linkedList) {
      try {
        let p = linkedList.head;
        let q = null;
        while (p && p.next != null) {
          if (p.data === p.next.data) {
            q = p.next.next;
            if (q === null) {
              p.next = null;
              break;
            }
            p.next = q;
          }
          if (p.data != p.next.data) {
            p = p.next;
          }
        }
        return linkedList;
      } catch (e) {
        throw e;
      }
  }
  const linkedList = new LinkedList();
  linkedList.insertAtEnd(10);
  linkedList.insertAtEnd(20);
  linkedList.insertAtEnd(30);
  linkedList.insertAtEnd(30);
  linkedList.insertAtEnd(30);
  linkedList.insertAtEnd(30);
  linkedList.insertAtEnd(40);
  linkedList.insertAtEnd(40);
  
  const data = removeDuplicatesSorted(linkedList);
  
  console.log(data);