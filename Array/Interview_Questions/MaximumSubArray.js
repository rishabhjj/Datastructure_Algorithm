function maxSubArray(arr) {
  try {
    let max_so_far = arr[0];
    let maximum_ending_here = 0;
    for (let i = 0; i< arr.length; i++) {
      maximum_ending_here = maximum_ending_here + arr[i];
      if (maximum_ending_here > max_so_far) {
        max_so_far = maximum_ending_here;
      }
      if (maximum_ending_here < 0) {
        maximum_ending_here = 0;
      }
    }
    console.log(max_so_far);
  } catch (e) {
    throw e;
  }
}

maxSubArray([4, -3, -2, 2, 3, 1, -2, -3, 4, 2, -6, -3, -1, 3, 1, 2]);