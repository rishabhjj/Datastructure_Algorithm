function quickSort(arr, start, end) {
  try {
    if (end > start) {
      let mid = partition(arr, start, end);
      quickSort(arr, start, mid -1);
      quickSort(arr, mid+1, end);
    }
  } catch (e) {
    throw e;
  }
}

function partition(arr, start, end) {
  try {
    let temp = arr[end];
    let i = start - 1;
    for (j = start; j< end; j++) {
      if (arr[j] < temp) {
        i = ++i;
        let val = arr[i];
        arr[i] = arr[j];
        arr[j] = val;
      }
    }
    let finalSwap = arr[i+1];
    arr[i+1] = arr[end];
    arr[end] = finalSwap
    return i+1;
  } catch (e) {
    throw e;
  }
}

const a  = [5, 7, 6, 1, 3, 2, 4];
quickSort(a, 0, 6)
console.log(a);