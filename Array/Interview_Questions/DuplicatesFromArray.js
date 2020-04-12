function removeDuplicates(arr) {
  try {
    let j = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] != arr[i+1]) {
        arr[j] = arr[i];
        j++;
      }
    }
    arr[j] = arr[arr.length -1];
    arr.splice(j+1);
    console.log(arr);
  } catch (e) {
    throw e;
  }
}

removeDuplicates([1,2,2,3,3,4])