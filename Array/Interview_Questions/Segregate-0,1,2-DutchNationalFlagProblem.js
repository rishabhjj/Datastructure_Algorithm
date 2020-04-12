function Segregate(a) {
  try {
    const n = a.length;
    let low = 0;
    let high = n - 1 ;
    let mid = 0;
    while(mid <=high) {
      switch (a[mid]) {
        case 0:
          let inter = a[low];
          a[low] = a[mid];
          a[mid] = inter;
          low ++; mid++;
          break
        case 1:
          mid ++;
          break;
        case 2:
          let temp = a[mid];
          a[high] = a[mid];
          a[mid] = temp;
          high --;
          break;
      }
    }
    console.log(a);
  } catch (e) {
    throw e;
  }
}

Segregate([0,1, 0, 0,1])