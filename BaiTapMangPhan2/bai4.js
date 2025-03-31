// Tìm số lần xuất hiện của một phần tử trong mảng.
const bai4 = () => {
  let arr = [1, 2, 4, 6, 3, 6, 4, 6, 7, 8, 9];
  let target = 6;
  const count = arr.filter((num) => num === target).length;
  console.log(count);
};
bai4();
