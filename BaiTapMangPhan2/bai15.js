// Kiểm tra mảng có phải là dãy số tăng dần hay không.
const kiemTraMang = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }
  return true;
};

console.log(kiemTraMang([3, 5, 7, 9])); // true
console.log(kiemTraMang([1, 3, 2, 4, 5])); // false
