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

  // One Approach is to have carry 1 and then start without considering second LL
  function addNumber(linkedlist1, linkedlist2) {
    try {
      // const size1 = size(linkedlist.head);
      // const size2 = size(linkedlist2.head);
      const newll = new LL()
      let rv1 = reverse(linkedlist1).head;
      let rv2 = reverse(linkedlist2).head;
      let carry = 0;
      while(rv1 && rv2) {
        let sum = rv1.data + rv2.data + carry;
        if (sum < 10) {
          newll.insertAtBeginning(sum);
          carry = 0;
        } else {
          newll.insertAtBeginning(sum % 10);
          carry = 1;
        }
        rv1 = rv1.next;
        rv2 = rv2.next;
      }
      if (carry > 0) {
        newll.insertAtBeginning(carry);
      }
      console.log(JSON.stringify(newll));
    } catch (e) {
      throw e;
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
  function size(ll) {
    try {
      let count = 0;
      while(ll) {
        count = count + 1;
        ll = ll.next;
      }
      return count;
    } catch (e) {
      throw e;
    }
  }
  const linkedlist = new LL();
  const secondLL = new LL();

  linkedlist.insertAtBeginning(9);
  linkedlist.insertAtBeginning(9);
  linkedlist.insertAtBeginning(9);
  linkedlist.insertAtBeginning(1);
  secondLL.insertAtBeginning(1);

  secondLL.insertAtBeginning(0);
  secondLL.insertAtBeginning(0);
  secondLL.insertAtBeginning(0);

  addNumber(linkedlist, secondLL);