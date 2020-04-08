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

  function createLoop(linkedList, index) {
      try {
        let count = 0;
        let temp = linkedList.head;
        while (count < index) {
            temp = temp.next;
            count ++;
        }
        const firstPart = temp;
        while (temp.next != null) {
          temp = temp.next;
        }
        temp.next = firstPart;
        return linkedList;
      } catch (e) {
        throw e;
      }
  }

  function findingLoop(linkedList) {
      try {
        let first = linkedList.head;
        let second = linkedList.head;

        while(first && second && second.next) {
            first = first.next;
            second = second.next.next;
            if (first === second) {
                return first;
            }
        }
        return null;
      } catch (e) {
          throw e;
      }
  }

  function startOfLoop(linkedList, loopLinkedList) {
      try {
        let nodehead = linkedList.head;
        let loophead = loopLinkedList;
        while(nodehead != loopLinkedList) {
            nodehead = nodehead.next;
            loophead = loophead.next;
        }
        return nodehead;
      } catch (e) {
        throw e;
      } 
  }
  
  const linkedList = new LinkedList();
  linkedList.insertAtEnd(120);
  linkedList.insertAtEnd(160);
  linkedList.insertAtEnd(20);
  linkedList.insertAtEnd(10);
  linkedList.insertAtEnd(30);   

  const loopLinkedList = createLoop(linkedList, 2);
  let updatedLinkedList = findingLoop(loopLinkedList);

  if (updatedLinkedList != null) {
    console.log(startOfLoop(loopLinkedList, updatedLinkedList))
  }

