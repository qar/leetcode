/**
 * https://leetcode.com/problems/contains-duplicate-iii/
 *
 * Given an array of integers,
 * find out whether there are two distinct indices i and j in the array
 * such that the difference between nums[i] and nums[j] is at most t
 * and the difference between i and j is at most k.
 *
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  var i, ii;
  var len = nums.length - 1;

  for (i = 0; i < len; i++) {
    for (ii = i + 1; ii <= len && ii - i <= k; ii++) {
      if (Math.abs(nums[ii] - nums[i]) <= t) {
        return true;
      }
    }
  }
  return false;
};
