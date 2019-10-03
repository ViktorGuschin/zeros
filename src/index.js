module.exports = function zeros(expression) {
  'use strict';
  const factorials = expression.split('*');
  let zeroCount = 0;

  const isDouble = item => item.includes('!!');

  const isOdd = item => item % 2 !== 0;

  const isAllOdd = allFactorials => {
    let countOdd = 0;
    allFactorials.forEach(num => {
      if (isDouble(num)) {
        num = num.slice(0, -2);
        if (isOdd(num)) {
          countOdd++;
        }
      }
    });
    return countOdd;
  };

  if (isAllOdd(factorials) === factorials.length) {
    return 0;
  }

  const getFactor = number => {
    let power = [];

    for (let p = 2; p <= number; ++p) {
      if (number % p === 0) {
        if (p === 5 || p === 10) power.push(p);
        number = Math.floor(number / p);
        p = 1;
      }
    }
    return power.length;
  };

  factorials.forEach(el => {
    let double = isDouble(el) ? 2 : 1;
    el = el.slice(0, -double);
    for (let i = el; i >= 1; i = i - double) {
      let factor = getFactor(i);
      zeroCount += factor > 0 ? factor : 0;
    }
  });

  return zeroCount;
};
