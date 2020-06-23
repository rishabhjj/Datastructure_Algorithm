const memoizedArray = [];

for (let i =0; i<= 6;i++) {
    memoizedArray[i] = [];
}

console.log(lcs('abcdgh', 'abedfhl', 6, 7));

function lcs(x, y, m, n) {
    try {
        for (let i =0; i<= m;i++) {
            for (let j =0; j<= n;j++) {
                if (i==0 || j==0) {
                    memoizedArray[i][j] = 0;
                }
            }
        }
        for (let i = 1; i<= m;i++) {
            for (let j = 1; j<= n;j++) {
                if (x[i-1] == y[j-1])
                    memoizedArray[i][j] = 1 + memoizedArray[i-1][j-1];
                else
                    memoizedArray[i][j] =  0; // and teturn max
                    //Math.max(memoizedArray[i-1][j] , memoizedArray[i][j-1]);
            }
        }
        return memoizedArray;
    } catch (e) {
        throw e;
    }
}