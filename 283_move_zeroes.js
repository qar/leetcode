/**
 * https://leetcode.com/problems/move-zeroes/
 *
 * Given an array nums, write a function to move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements.
 *
 * For example, given nums = [0, 1, 0, 3, 12],
 * after calling your function, nums should be [1, 3, 12, 0, 0].
 *
 * Note:
 *  1. You must do this in-place without making a copy of the array.
 *  2. Minimize the total number of operations.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var end = nums.length;

  for (var index = 0; index < end; index++) {
    if (nums[index] === 0) {
      nums.push(nums.splice(index, 1)[0]);
      index -= 1;
      end -= 1;
    }
  }
};
