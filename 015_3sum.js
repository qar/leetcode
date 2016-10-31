/**
 * https://leetcode.com/problems/3sum/
 *
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * Note: The solution set must not contain duplicate triplets.
 *
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var twoSum = function(nums, target) {
  var len = nums.length;
  var results = [];
  for (var i = 0; i < len; i++) {
    var numOne = nums[i];
    var numTwo = target - nums[i];

    for (var ii = i + 1; ii < len; ii++) {
      if (nums[ii] === numTwo) {
        results.push([numOne, nums[ii]]);
      }
    }
  }
  
  return results;
};

var threeSum = function(nums) {
  nums = nums.sort(function(a, b) {return a - b});
  var len = nums.length;
  var results = [];
  var dups = [];
  for (var i = 0; i < len; i++) {
    var numOne = nums[i];
    var r = twoSum(nums.slice(i + 1), 0 - numOne);
    
    for (var j = 0; j < r.length; j++) {
      r[j].unshift(numOne);
      var s = r[j].join('');
      if (dups.indexOf(s) === -1) {
        results.push(r[j]);
        dups.push(s);
      } else {
        continue;
      }
    }
  }
  return results;
};
