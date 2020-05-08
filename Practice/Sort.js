function selection(arr) {
  try {
    for (let i = 0; i< arr.length  - 1; i++) {
      let iMin = i;
      let temp = arr[i];
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[iMin]) {
          iMin = j;
        }
      }
      arr[i] = arr[iMin];

      arr[iMin] = temp; 
    }
    return arr;
  } catch (e) {
    throw e;
  }
}

//console.log(selection([3, 1, 8, 7, 2, 20]))

function insertion(arr) {
  try {
    for (let i = 1; i < arr.length; i++) {
      let temp = arr[i];
      let index = i;
      while (index && arr[index-1] > temp) {
        arr[index] = arr[index-1];
        index --;
      }
      arr[index] = temp;
    }
    return arr;
  } catch (e) {
    throw e;
  }
}

console.log(insertion([3, 1, 8, 7, 2, 20]))