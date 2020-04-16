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

  function swapNodes(linkedList) {
    try {
      let p = linkedList.head;
      const swappedList = p.next;
      let q = null;
      let temp = null;
      while(1) {
        q = p.next;
        temp = q.next;
        q.next = p;
        if (!temp || !temp.next) {
          p.next = temp;
          break;
        }
        p.next = temp.next;
        p = temp;
      }
      console.log(JSON.stringify(swappedList));
      return swappedList;
    } catch (e) {
      throw e;
    }
  }

  const ll1 = new LL();

ll1.insertAtBeginning(60);
ll1.insertAtBeginning(45);
ll1.insertAtBeginning(32);
ll1.insertAtBeginning(30);

swapNodes(ll1)
