// Tìm phần tử xuất hiện nhiều nhất trong mảng.
function timPhanTuXuatHienNhieuNhat(arr) {
  const frequency = {};
  let maxCount = 0;
  let mostFrequent = null;

  arr.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;

    if (frequency[num] > maxCount) {
      maxCount = frequency[num];
      mostFrequent = num;
    }
  });

  return mostFrequent;
}

const arr = [1, 3, 2, 3, 4, 1, 3, 2, 1, 1];
console.log(timPhanTuXuatHienNhieuNhat(arr));
