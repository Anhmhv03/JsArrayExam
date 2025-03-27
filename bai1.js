// Tính tổng các phần tử trong mảng.
const TinhTong = (mangA = []) => {
  //for
  let sum = 0;
  // for (let i in mangA) {
  //   sum = sum + mangA[i];
  // }

  // for (let i of mangA) {
  //   sum = sum + i;
  // }

  // for (let i = 0; i < mangA.length; i++) {
  //   sum = sum + mangA[i];
  // }
  // let i = 0;
  // while (i < mangA.length) {
  //   sum = sum + mangA[i];
  //   i++;
  // }
  mangA.map((value, index) => {
    sum = sum + value;
  });
  return sum;
};
const mangA = [3, 5, 6, 4, 8];
console.log(TinhTong(mangA));
