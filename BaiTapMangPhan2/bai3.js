// Đếm số lượng số chẵn, số lẻ trong mảng.
const demSoChanLe = () => {
  let n = 10;
  let soLe = 0;
  let soChan = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      soChan++;
    } else {
      soLe++;
    }
  }
  console.log(`So le: ${soLe} | So Chan: ${soChan}`);
};
demSoChanLe();
