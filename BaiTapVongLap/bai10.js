const tamGiacSo = (n) => {
  for (let i = 1; i <= n; i++) {
    let x = "";
    for (let a = 1; a <= i; a++) {
      x += a;
    }
    console.log(x);
  }
};
let n = 4;
tamGiacSo(n);
