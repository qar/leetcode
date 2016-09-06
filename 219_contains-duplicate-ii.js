/**
 * https://leetcode.com/problems/contains-duplicate-ii/
 *
 * Given an array of integers and an integer k,
 * find out whether there are two distinct indices i and j in the array
 * such that nums[i] = nums[j] and the difference between i and j is at most k.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
   var mapper = {};
  for (var i = 0, len = nums.length; i < len; i++) {
    if (mapper[nums[i]] >= 0 && Math.abs(i - mapper[nums[i]]) <= k) {
      return true;
    }

    mapper[nums[i]] = i;
  }

  return false;
};
