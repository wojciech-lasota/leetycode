var maxSubArray = function (nums) {
  let sum = 0;
  let maxSum = -Infinity;
  if (nums.length == 0) return 0;
  if (nums.length == 1) return nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxSum = Math.max(maxSum, sum);
    if (sum < 0) sum = 0;
  }
  return maxSum;
};

// var maxSubArray = function (nums) {
//   let subArraySum = Number.MIN_VALUE;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//         subArraySum = Math.max(
//             subArraySum,
//             nums.slice(i, j + 1).reduce((p, c) => p + c, 0)
//             );
//             console.log(subArraySum)

//     }
//   }
//   return subArraySum;
// };

// var maxSubArray = function (nums) {
//     let max_so_far = -Infinity
//     let max_ending_here =0
//     for(let i =0; i< nums.length;i++){
//         max_ending_here = max_ending_here + nums[i]
//         if(max_so_far < max_ending_here){
//             max_so_far = max_ending_here
//         }
//         if(max_ending_here <0){
//             max_ending_here = 0
//         }
//     }
//     return max_so_far
//   };
