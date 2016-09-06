/**
 * https://leetcode.com/problems/contains-duplicate/
 *
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array,
 * and it should return false if every element is distinct.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var mapper = {};
  for (var i = 0, len = nums.length; i < len; i++) {
    if (mapper[nums[i]] === 1) {
      return true;
    }

    mapper[nums[i]] = 1;
  }

  return false;
};
