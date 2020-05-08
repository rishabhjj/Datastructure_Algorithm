function BubbleSort(arr) {
  try {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= n-2; j++) {
        console.log(j)
        if (arr[j] > arr[j+1]) {
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
      console.log(arr);
    }
    console.log(arr);
  } catch (e) {
    throw e;
  }
}

BubbleSort([3, 1, 8, 7, 2, 20])