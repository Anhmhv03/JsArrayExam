// Tính tổng các phần tử trong mảng.
const tinhTong = () => {
  let n = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 1; i <= n.length; i++) {
    sum += i;
  }
  console.log(sum);
};

tinhTong();
