const tamGiacDoiXung = (n) => {
  for (let i = 1; i <= n; i++) {
    let x = "";

    for (let a = 1; a <= i; a++) {
      x += a;
    }
    for (let a = i - 1; a >= 1; a--) {
      x += a;
    }
    console.log(x);
  }
};
let n = 5;
tamGiacDoiXung(n);
