/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length;
  let middle;
  while (start <= end) {
    middle = Math.floor(start + (end - start) / 2);
    if (nums[middle] == target) {
      return middle;
    } else if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return end + 1;
};
