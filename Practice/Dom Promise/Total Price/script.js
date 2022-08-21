let price = [
    "1,300.00",
    "1,650.00",
    "11,000.00",
    "3,250.00",
    "1,200.00",
    "1,000.00",
  ];

let sum = price.reduce((item, c) => item+ (+c.split(".")[0].split(",")[0]*1000+(
    +(c.split(".")[0].split(",")[1]))), 0)

console.log(sum)


