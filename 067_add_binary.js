/**
 * https://leetcode.com/problems/add-binary/
 *
 * Given two binary strings, return their sum (also a binary string).
 *
 * For example,
 * a = "11"
 * b = "1"
 * Return "100".
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var values = [];
  var aIdx = a.length - 1;
  var bIdx = b.length - 1;
  var maxIdx = aIdx > bIdx ? aIdx : bIdx;
  var carry = false;
  for (var i = 0; i <= maxIdx; aIdx -= 1, bIdx -= 1, i++) {
    if (a[aIdx] === '1' && b[bIdx] === '1') {
      if (carry) {
        values.unshift('1');
      } else {
        values.unshift('0');
        carry = true;
      }
    } else if (a[aIdx] === '0' && b[bIdx] === '0') {
      if (carry) {
        values.unshift('1');
        carry = false;
      } else {
        values.unshift('0');
      }
    } else if (a[aIdx] === '1' || b[bIdx] === '1') {
      if (carry) {
        values.unshift('0');
      } else {
        values.unshift('1');
      }
    } else {
      if (carry) {
        values.unshift('1');
        carry = false;
      } else {
        values.unshift('0');
      }
    }
  }
  
  if (carry) {
    values.unshift('1');
  }
  
  return values.join('');
};
