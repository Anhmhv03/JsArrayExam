// Kiểm tra mảng có phải là dãy số giảm dần hay không.
const kiemTraMang = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) {
      return false;
    }
  }
  return true;
};

console.log(kiemTraMang([3, 5, 7, 9]));
console.log(kiemTraMang([9, 7, 5, 3]));
