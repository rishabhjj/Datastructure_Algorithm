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
    let start = linkedlist.head;
    let next = null;
    while(start) {
      next = start.next;
      start.next = previous;
      previous = start;
      start = next;
    }
    linkedlist.head = previous;
    console.log(JSON.stringify(linkedlist))
  } catch (e) {
    throw e;
  }
}
function divideLinkedList(linkedlist) {
  try {
    const list = linkedlist.head;
    let first = list;
    let second = list;
    while(1) {
      if(second === null) {

      }
      if (second.next === null) {

      }
      first =first.next;
      second = second.next.next;
    }
  } catch (e) {

  }
}
const ll1 = new LL();
const ll2 = new LL();


ll1.insertAtBeginning(60);
ll1.insertAtBeginning(45);
ll1.insertAtBeginning(32);
ll1.insertAtBeginning(30);
ll1.insertAtBeginning(20);
ll1.insertAtBeginning(15);

reverse(ll1);
ll2.insertAtBeginning(67);
ll2.insertAtBeginning(39);
ll2.insertAtBeginning(27);
ll2.insertAtBeginning(18);
ll2.insertAtBeginning(10);

