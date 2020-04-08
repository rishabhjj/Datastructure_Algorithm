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
}

function mergeLinkedList(linkedList1, linkedList2, mergeLinkedList) {
  let new_head = new LinkedList()
  let list1 = linkedList1.head;
  let list2 = linkedList2.head;
  let mergedList = mergeLinkedList.head
  if (list1 === null) {
    mergeLinkedList = linkedList2;
    return;
  }
  if (list2 === null) {
    mergeLinkedList = linkedList1;
    return;
  }
  if (list1 && list2) {
    if (list1.data < list2.data) {
      mergedList = list1;
      list1 = mergedList.next;
    } else if (list1.data > list2.data) {
      mergedList = list2;
      list2 = mergedList.next;
    }
    else if (list1.data === list2.data) {
      mergedList = list2;
      list1 = list1.next;
      list2 = list2.next;
    }
  }
  new_head = mergedList;

  while (list1 && list2) {
    if (list1.data < list2.data) {
      mergedList.next = list1;
      mergedList = list1;
      list1 = mergedList.next;
    } else if (list1.data > list2.data) {
      mergedList.next = list2;
      mergedList = list2;
      list2 = mergedList.next;
    }
    else if (list1.data === list2.data) {
      mergedList.next = list2;
      list1 = list1.next;
      list2 = list2.next;
    }
  }
  if (list1 === null) {
    mergedList.next = list2;
  }
  if (list2 === null) {
    mergedList.next = list1;
  }
  return new_head;

}

const linkedList1 = new LinkedList();
const linkedList2 = new LinkedList();
const mergedList = new LinkedList();

linkedList1.insertAtBeginning(60);
linkedList1.insertAtBeginning(45);
linkedList1.insertAtBeginning(32);
linkedList1.insertAtBeginning(30);
linkedList1.insertAtBeginning(20);
linkedList1.insertAtBeginning(15);


linkedList2.insertAtBeginning(67);
linkedList2.insertAtBeginning(39);
linkedList2.insertAtBeginning(27);
linkedList2.insertAtBeginning(18);
linkedList2.insertAtBeginning(10);

let ll = mergeLinkedList(linkedList1, linkedList2, mergedList);

while(ll) {
  console.log(ll.data);
  ll = ll.next;
}