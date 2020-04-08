const A = [1, 87, 87 , 87, 90];

const LastOccurence = (A, element) => {
  let start = 0;
  let end = A.length - 1;
  let result = -1;
  while (end >= start) {
    let mid = parseInt((start + end) / 2);
    if (A[mid] === element) {
        result = mid;
        start = mid + 1;
    } else if (element < A[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
}

console.log(LastOccurence(A, 87));
