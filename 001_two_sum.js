/**
 * https://leetcode.com/problems/two-sum/
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution.
 *
 * Example:
 *
 *   Given nums = [2, 7, 11, 15], target = 9,
 *   Because nums[0] + nums[1] = 2 + 7 = 9,
 *   return [0, 1].
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    var numOne = nums[i];
    var numTwo = target - nums[i];

    for (var ii = 0; ii < len; ii++) {
      if (nums[ii] === numTwo && i !== ii) {
        return [i, ii];
      }
    }
  }
};
