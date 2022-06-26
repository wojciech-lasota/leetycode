/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[j++] = nums[i];
    }
  }

  return j;
};
