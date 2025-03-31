// Loại bỏ phần tử trùng lặp trong mảng.
const loaiPhanTuTrung = (arr) => {
  return [...new Set(arr)];
};
let arr = [1, 2, 3, 4, 2, 2];
console.log(loaiPhanTuTrung(arr));
