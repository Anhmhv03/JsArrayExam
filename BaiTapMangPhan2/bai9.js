// Kiểm tra mảng có đối xứng hay không.
const kiemDoiXung = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
let arr = [1, 2, 3, 4, 5, 6];

console.log(kiemDoiXung(arr) ? "doi xung" : "khong doi xung");
