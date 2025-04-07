// Loại bỏ phần tử trùng lặp trong mảng.
const loaiPhanTuTrung = () => {
  let total = [];
  let arr = [1, 2, 3, 2, 4];

  for (let i = 0; i < arr.length; i++) {
    if (!total.includes(arr[i])) {
      total.push(arr[i]);
    }
  }
  return total;
};
console.log(loaiPhanTuTrung());
