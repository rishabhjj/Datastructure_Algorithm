function rotatedTimes(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    let mid = parseInt((high + low) / 2);
    if (arr[low] <= arr[high]) {
      return low;
    }
    let next = (mid + 1) % high;
    let prev = (mid + high - 1) % high;
    if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
      return mid;
    }
    if (arr[mid] < arr[high]) {
      high = mid -1
    } else {
      low = mid + 1;
    }
  }
}

console.log(rotatedTimes([11, 12, 15, 18, 2, 5, 6, 8]));