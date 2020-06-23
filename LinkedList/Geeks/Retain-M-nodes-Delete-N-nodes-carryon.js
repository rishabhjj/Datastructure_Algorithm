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

  function deleteMRetainN(linkedlist, m, n) {
    try {
      let list = linkedlist.head;
      if (!list) {
        return null;
      }
      while(list) {
        let countm = 0;
        let countn = 0;
        while (m > countm && list) {
          list = list.next;
          countm ++;
        }
        if (!list) {
          return list;
        }
        let temp = list;
        while (n > countn && temp) {
          temp = temp.next;
          countn ++;
        }
        list.next = temp;
        list = temp;
      }
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
  
  console.log(deleteMRetainN(linkedlist, 1, 1))