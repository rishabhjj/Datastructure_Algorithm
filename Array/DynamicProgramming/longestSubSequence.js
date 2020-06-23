function lcs(x, y, m, n) {
    try {
        if (n == 0 || m == 0) {
            return 0;
        }

        if (x[m-1] == y[n-1]) return 1 + lcs(x,y,m-1,n-1)
        else return Math.max(lcs(x,y,m-1,n), lcs(x,y, m, n-1));
    } catch (e) {
        throw e;
    }
}

console.time("start");
console.log(lcs('abcdgh', 'abedfhl', 6, 7));
console.timeEnd("start");