/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const left = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      left.push(s[i]);
    } else if (
      s[i] === ")" &&
      left.length != 0 &&
      left[left.length - 1] === "("
    ) {
      left.pop();
    } else if (
      s[i] === "}" &&
      left.length != 0 &&
      left[left.length - 1] === "{"
    ) {
      left.pop();
    } else if (
      s[i] === "]" &&
      left.length != 0 &&
      left[left.length - 1] === "["
    ) {
      left.pop();
    } else {
      return false;
    }
  }
  return left.length === 0;
};
