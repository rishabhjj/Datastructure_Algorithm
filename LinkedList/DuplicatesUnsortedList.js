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
  
  function removeDuplicatesUnSorted(linkedList) {
      try {
        let p = linkedList.head;
        let q = null;
        const keyValue = { };
        while (p) {
            console.log(keyValue)
            if (!keyValue[p.data]) {
                keyValue[p.data] = 1;
                q = p;
                p = p.next;
                q.next = p;
            } else {
                p = p.next;
                q.next = p;
            }
        }
        console.log(JSON.stringify(linkedList))
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
  const data = removeDuplicatesUnSorted(linkedList);
  