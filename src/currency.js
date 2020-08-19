const canadianDollar = .91;

function roundTwo(amount) {
  return Math.round(amount * 100) / 100;
}

const canadianToUS = canadian => roundTwo(canadian * canadianDollar);
const USToCanadian = us => roundTwo(us / canadianDollar);

exports {
  canadianToUS,
  USToCanadian
}