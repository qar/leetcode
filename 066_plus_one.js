/**
 * https://leetcode.com/problems/plus-one/
 *
 * Given a non-negative number represented as an array of digits, plus one to the number.
 * The digits are stored such that the most significant digit is at the head of the list.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var len = digits.length;

  while (len && digits[len - 1] == 9) {
    digits[len - 1] = 0;
    len -= 1;
  }

  if (len) {
    digits[len - 1] += 1; 
  } else {
    digits.unshift(1);
  }

  return digits;
};
