/*
Array is given and value at each index = maximum jump it can make(numbe of places it can move on right)
https://www.youtube.com/watch?v=jH_5ypQggWg&list=PLeIMaH7i8JDjMEB-b2I8NGcKMFZc85djW
*/

const arr = [2, 1, 3, 2, 3, 4, 5, 1, 2, 8];
function minimumJump(arr) {
  try {
    const minimum_jumps_array = [0];
    const jump_path_array = [0];
    for (let i =1; i< arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (i -j  <= arr[j]) {
          minimum_jumps_array[i] = Math.min((minimum_jumps_array[i] || Number.MAX_SAFE_INTEGER ), minimum_jumps_array[j] + 1);
          jump_path_array[i] = Math.min((jump_path_array[i] || Number.MAX_SAFE_INTEGER ), j);
        }
      }
    }
    console.log(JSON.stringify(minimum_jumps_array), JSON.stringify(jump_path_array));
    console.log("Minimum number of jump", minimum_jumps_array[minimum_jumps_array.length - 1])
  } catch (e) {
    throw e;
  }
}

minimumJump(arr);