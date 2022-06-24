/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const string = x.toString();
  if (string.length == 1) return true;
  const start = string[0];
  const end = string[string.length - 1];
  if (start != end) {
    return false;
  }
  if ((string.lenght = 2)) {
    return true;
  }
  const subString = string.substring(1, string.length - 1);
  return isPalindrome(subString);
};
