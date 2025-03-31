// Tìm phần tử lớn nhất, nhỏ nhất trong mảng.
const timPhanTu = () => {
  let n = [2, 5, 8, 4, 3, 9];
  let soLonNhat = Math.max(...n);
  let soNhoNhat = Math.min(...n);
  console.log(soLonNhat);
  console.log(soNhoNhat);
};
timPhanTu();
