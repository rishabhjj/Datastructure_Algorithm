let Queue = [];

let front = -1;
let rear = -1;

function isEmpty() {
  try {
    if (front === -1 && rear === -1) {
      return true;
    }
  } catch (e) {
    throw e;
  }
}

function enQueue(value) {
  try {
    if (isEmpty()) {
      rear = front = 0;
    } else {
      rear = rear + 1;
    }
    Queue[rear] = value;
    return;
  } catch (e) {
    throw e;
  }
}

function deQueue() {
  try {
    if (isEmpty()) {
      return;
    } else if (front === rear) {
      front = rear = -1;
      Queue = [];
    } else {
      front = front + 1;
      Queue.shift(front)
    }
  } catch (e) {
    throw e;
  }
}
enQueue(1);
enQueue(2);
console.log(Queue);
deQueue()
console.log(Queue);
