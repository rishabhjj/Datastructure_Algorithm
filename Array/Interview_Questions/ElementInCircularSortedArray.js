function elementInCircularList(arr, ele) {
  try {
    let low = 0;
    let high = arr.length - 1;
    while (high > low) {
      let mid = parseInt((high + low)/2);
      if (arr[mid] === ele) {
        return mid;
      }
      if (arr[high] >= arr[mid]) {
        if (ele > arr[mid] && ele <= arr[high]) {
          low =  mid + 1;
        } else {
          high = mid - 1;
        }
      }
      if (arr[mid >= arr[low]]) {
        if (ele >= arr[low] && ele < arr[mid]) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
    }
  } catch (e) {
    throw e;
  }
}

console.log(elementInCircularList([11, 12, 15, 18, 2, 5, 6, 8], 18));