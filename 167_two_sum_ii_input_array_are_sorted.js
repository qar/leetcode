/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
 * Given an array of integers that is already sorted in ascending order,
 * find two numbers such that they add up to a specific target number.
 *
 * The function twoSum should return indices of the two numbers such that they add up to the target,
 * where index1 must be less than index2.
 * Please note that your returned answers (both index1 and index2) are not zero-based.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Input: numbers={2, 7, 11, 15}, target=9
 * Output: index1=1, index2=2
 *
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var len = numbers.length;
  for (var i = 0; i < len; i++) {
    var numOne = numbers[i];
    var numTwo = target - numbers[i];

    for (var ii = i + 1; ii < len; ii++) {
      if (numbers[ii] === numTwo && i !== ii) {
        return [i + 1, ii + 1];
      }
    }
  }
};
