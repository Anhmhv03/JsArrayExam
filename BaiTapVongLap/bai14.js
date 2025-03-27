const inHinhChuNhat = (rows, cols) => {
  for (let i = 1; i <= rows; i++) {
    let row = "";

    for (let j = 1; j <= cols; j++) {
      row += "*";
    }

    console.log(row);
  }
};

let rows = 3,
  cols = 5;
inHinhChuNhat(rows, cols);
