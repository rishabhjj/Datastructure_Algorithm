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
  
  function rotateLinkedList(linkedList, element) {
    try {
      let list = linkedList.head;
      while (list) {
        if (list.data === element) {
          break;
        }
        list = list.next;
      }
      let rotatedPart = list.next;
      list.next = null;
      let toRotate = rotatedPart;
      while(toRotate.next) {
        toRotate = toRotate.next;
      }
      toRotate.next = rotatedPart;
      return rotatedPart;
    } catch (e) {
      throw e;
    }
  }
  const linkedList = new LinkedList();
  linkedList.insertAtEnd(100);
  linkedList.insertAtEnd(200);
  linkedList.insertAtEnd(300);
  linkedList.insertAtEnd(400);
  linkedList.insertAtEnd(500);
  linkedList.insertAtEnd(600);
  linkedList.insertAtEnd(700);
  linkedList.insertAtEnd(800);

  console.log(rotateLinkedList(linkedList, 600));