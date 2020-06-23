

function lcs(x, y, m, n) {
    try {
        if (n == 0 || m == 0) {
            return 0;
        }
        if (memoizedArray[m][n] != -1) {
            return memoizedArray[m][n];
        }
        if (x[m-1] == y[n-1]) return memoizedArray[m][n] = 1 + lcs(x,y,m-1,n-1)
        else return memoizedArray[m][n] = Math.max(lcs(x,y,m-1,n), lcs(x,y, m, n-1));
    } catch (e) {
        throw e;
    }
}

const memoizedArray = [];

for (let i =0; i<= 6;i++) {
    memoizedArray[i] = [];
}

for (let i =0; i<= 6;i++) {
    for (let j =0; j<= 7;j++) {
        memoizedArray[i][j] = -1;
    }
}

console.log(memoizedArray)
console.time("start");
console.log(lcs('abcdgh', 'abedfhl', 6, 7));
console.timeEnd("start");