const KiemTraSoNguyenTo = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};
let n = 7;
console.log(KiemTraSoNguyenTo(n) ? "so nguyen to" : "Khong phai so nguyen to");
