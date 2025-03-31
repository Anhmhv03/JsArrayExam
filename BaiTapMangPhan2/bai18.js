// Đếm số lượng phần tử có giá trị lớn hơn một số cho trước.
function demSoPhanTu(arr, x) {
  let count = 0;
  for (let num of arr) {
    if (num > x) count++;
  }
  return count;
}

console.log(demSoPhanTu([10, 20, 30, 40, 50], 25));
