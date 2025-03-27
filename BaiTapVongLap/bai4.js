const DemChanLe = () => {
  let n = 6;
  let soLe = 0;
  let soChan = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      soChan++;
      console.log(i);
    } else {
      soLe++;
    }
  }
  console.log(`so chan: ${soChan} | so le: ${soLe}`);
};
DemChanLe();
