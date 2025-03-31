// Nhập một mảng và sắp xếp giảm dần
const giamDan = () => {
  const arr = [5, 7, 3, 6, 2, 1, 8, 4];
  arr.sort((a, b) => b - a);
  console.log(arr);
};
giamDan();
