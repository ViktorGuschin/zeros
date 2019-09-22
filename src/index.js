/*module.exports =*/ function zeros(expression) {
  'use strict';
  const factorials = expression.split('*');
  let zeroCount = 0;

  const isDouble = item => item.includes('!!');

  const isOdd = item => item % 2 !== 0;

  const zerosInFactorial = (item, double = false, odd = false) => {
    let count = 0;
    // const factor = double ? 10 : 5;
    if (odd) {
      item--;
    } else if (double) {
      item /= 2;
    }
    // item = double ? item / 2 : item;
    while (item > 0) {
      item = Math.floor(item / 5);
      count += item;
    }
    return count;
  };

  factorials.forEach(el => {
    // zeroCount += zerosInFactorial(
    //   isDouble(el) ? el.slice(0, -2) : el.slice(0, -1),
    //   isDouble(el),
    //   !isOdd(el),
    // );
    if (isDouble(el)) {
      el = el.slice(0, -2);
      if (!isOdd(el)) {
        zeroCount += zerosInFactorial(el, true);
      } else {
        zeroCount += zerosInFactorial(el, true, true);
      }
    } else {
      el = el.slice(0, -1);
      zeroCount += zerosInFactorial(el);
    }
  });
  return zeroCount;
}

zeros('1!!*2!!*3!!*4!!*5!!*6!!*7!!*8!!*9!!*10!!');
// zeros('1!*2!*3!*4!*5!*6!*7!*8!*9!*10!');
