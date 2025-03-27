const TinhTong = (n) => {
  let sum = 0;
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sum;
};
let n = 12345;
console.log(TinhTong(n));
