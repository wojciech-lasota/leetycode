/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const xString = x.toString();
  if (xString.length == 1) {
    return true;
  }
  const start = xString[0];
  // console.log("start ", start);
  const end = xString[xString.length - 1];
  // console.log("end ", end);
  if (start != end) {
    console.log("start!=end");
    return false;
  }
  if (xString.lenght == 2) {
    return true;
  }
  const subString = xString.substring(1, xString.length - 1);
  return isPalindrome(subString);
};
