/**
 * https://leetcode.com/problems/remove-element/
 *
 * Given an array and a value, remove all instances of that value in place and return the new length.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 */


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (var index = 0; index < nums.length; index ++) {
    if (nums[index] === val) {
      nums.splice(index, 1);
      index -= 1;
    }
  }

  return nums.length;
};
