const tamGiacPhai = () => {
  for (let i = 1; i <= n; i++) {
    let x = "";
    for (let a = 1; a <= n - i; a++) {
      x += " ";
    }
    for (let h = 1; h <= i; h++) {
      x += "*";
    }
    console.log(x);
  }
};
let n = 4;
tamGiacPhai(n);
