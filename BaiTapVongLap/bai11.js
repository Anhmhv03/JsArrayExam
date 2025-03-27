const tamGiacTrai = (n) => {
  for (let i = 1; i <= n; i++) {
    let x = "";
    for (let a = 1; a <= i; a++) {
      x += "*";
    }
    console.log(x);
  }
};
let n = 4;
tamGiacTrai(n);
