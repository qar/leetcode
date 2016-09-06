/**
 * https://leetcode.com/problems/largest-number/
 *
 * Given a list of non negative integers, arrange them such that they form the largest number.
 * For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.
 * Note: The result may be very large, so you need to return a string instead of an integer.
 *
 *  @param {number[]} nums
 *  @return {string}
 */
var largestNumber = function(nums) {
  return nums.map(function stringifyNumber(num) {
    return num.toString();
  })
  .sort(function compareStr(str1, str2) {
    var com1 = str1 + str2;
    var com2 = str2 + str1;
    return com2 - com1; // descending 
  })
  .reduce(function concatStr(result, str) {
    return result += str;
  }, '')
  .replace(/^0+/, '') || '0';
};
