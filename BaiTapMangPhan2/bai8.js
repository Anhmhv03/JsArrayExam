// Nhập mảng và tìm số nguyên tố trong mảng.
const timSoNguyenTo = (arr) => {
  if (arr < 2) return false;
  for (let i = 2; i <= Math.sqrt(arr); i++) {
    if (arr % i === 0) return false;
  }
  return true;
};
const arr = [5, 7, 3, 6, 2, 1, 8, 4];
const soNguyenTo = arr.filter(timSoNguyenTo);
console.log(soNguyenTo);
