/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let longest = 0;
  let current = 0;
  for (let i = 0; i < s.length; s++) {
    if (s[i] != " ") {
      current++;
      if (current > longest) {
        longest = current;
      }
    } else if (s[i] == " ") {
      current = 0;
    }
  }
  return longest;
};
