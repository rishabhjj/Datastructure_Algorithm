const A = [1, 24, 32 , 87, 90];

const BinarySearch = (A, element, start, end) => {
  if (end < start) {
    return -1;
  }
  let mid = parseInt ((start + end) / 2);
  if (element === A[mid]) {
    return mid;
  } else if (A[mid] > element) {
    BinarySearch(A, element, start, mid -1);
  } else {
    BinarySearch(A, element, mid + 1, end);
  }
}
BinarySearch(A, 87, 0, 4);

