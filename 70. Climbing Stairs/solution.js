/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  let total = 0;
  let first = 0;
  let second = 1;
  let i = 0;
  while (i < n) {
    total = first + second;
    first = second;
    second = total;
    i++;
  }
  return total;
};
