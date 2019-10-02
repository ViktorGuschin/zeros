/*module.exports = */ function zeros(expression) {
  'use strict';
  const factorials = expression.split('*');
  let zeroCount = 0;

  const isDouble = item => item.includes('!!');

  const isOdd = item => item % 2 !== 0;

  const zerosInFactorial = (item, double = false, odd = false) => {
    function zeroCount(number) {
      let resMax = 0;
      let resMin = 0;

      let index = 5;
      while (index <= number) {
        resMax += Math.floor(number / index);
        index *= 5;
      }
      index = 2;
      while (index <= number) {
        resMin += Math.floor(number / index);
        index *= 2;
      }
      return Math.min(resMin, resMax);
    }

    if (double) {
      let count = 0;
      for (let i = item; i >= 0; i = i - 2) {
        count += zeroCount(i);
      }
      // if (odd) {
      //   for (let i = 2; i <= item; i + 2) {
      //     count += zeros(i);
      //   }
      // } else {
      //   for (let i = 1; i <= item; i + 2) {
      //     count += zeros(i);
      //   }
      // }
      return count;
    } else {
      return zeros(item);
    }
  };

  factorials.forEach(el => {
    // zeroCount += zerosInFactorial(
    //   isDouble(el) ? el.slice(0, -2) : el.slice(0, -1),
    //   isDouble(el),
    //   !isOdd(el),
    // );
    if (isDouble(el)) {
      el = el.slice(0, -2);
      zeroCount += zerosInFactorial(el, true);
      // if (!isOdd(el)) {
      //   zeroCount += zerosInFactorial(el, true);
      // } else {
      //   zeroCount += zerosInFactorial(el, true, true);
      // }
    } else {
      el = el.slice(0, -1);
      zeroCount += zerosInFactorial(el);
    }
  });
  return zeroCount;
}

// zeros('1!!*2!!*3!!*4!!*5!!*6!!*7!!*8!!*9!!*10!!');
// zeros('1!*2!*3!*4!*5!*6!*7!*8!*9!*10!');
console.log(zeros('9!!*10!!*7!!'));
