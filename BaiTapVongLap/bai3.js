const TinhGiaiThua = () => {
  let n = 4;
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  console.log(sum);
};
TinhGiaiThua();
