/**
 * https://leetcode.com/problems/search-for-a-range/
 *
 * Given a sorted array of integers, find the starting and ending position of a given target value.
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * If the target is not found in the array, return [-1, -1].
 *
 * For example,
 * Given [5, 7, 7, 8, 8, 10] and target value 8,
 * return [3, 4].
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange2 = function(nums, target) {
  var startPos = -1;
  var endPos = -1;
  
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (startPos === -1) {
        startPos = i;
      }
      endPos = i;
    }
  }
  
  return [startPos, endPos];
};

var searchRange = function(nums, target) {
  return [nums.indexOf(target), nums.lastIndexOf(target)];
};
