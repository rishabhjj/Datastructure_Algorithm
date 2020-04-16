function lcs(string1, string2) {
  try {
    const matrix = [];

    for (let i = 0; i <= string1.length; i++) {
      matrix[i] = [];
      for (let j =0; j <= string2.length; j++) {
        matrix[i][j] = 0;
      }
    }

    for (let i = 1; i <= string1.length; i++) {
      for (let j = 1; j <= string2.length; j++) {
        if (string1[i -1] === string2[j-1]) {
          matrix[i][j] = matrix[i-1][j-1]+ 1;
        } else {
          matrix[i][j] = Math.max(matrix[i][j-1], matrix[i-1][j]);
        }
      }
    }
    console.log(matrix[string1.length][string2.length])
  } catch (e) {
    throw e;
  }
}
let str1 = "abcvdefgh";
let str2 = "bqdrcvefgh";

lcs(str1, str2);