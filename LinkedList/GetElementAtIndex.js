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
getAtIndex(index) {
  let current = this.head;
  let count = 0;
  while(current) {
    if (count === index) {
      console.log(current.data);
    }
    count ++;
    current = current.next;
  }
}
deleteAtIndex(index) {
  let current = this.head;
  let previous = 0;
  let count = 0;
  if (index === 0) {
    this.head = current.next;
    this.size -= 1;
    return;
  }
  while (count < index) {
    previous = current;
    count ++;
    current =current.next;
  }
  previous.next = current.next;
  this.size -= 1;
}

}
  
const linkedList = new LinkedList();
linkedList.insertAtBeginning(120);
linkedList.insertAtBeginning(160);
linkedList.insertAtBeginning(200);
linkedList.insertAtBeginning(240);
console.log(JSON.stringify(linkedList))
linkedList.deleteAtIndex(2);
console.log(JSON.stringify(linkedList))
