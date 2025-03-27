const KiemTraDoiXung = (n) => {
  let str = n.toString();
  let daoNguoc = str.split("").reverse().join("");
  return str === daoNguoc ? "doi xung" : "khong doi xung";
};
let n = 121;
console.log(KiemTraDoiXung(n));
