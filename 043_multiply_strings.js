/**
 * https://leetcode.com/problems/multiply-strings/
 *
 * Given two numbers represented as strings, return multiplication of the numbers as a string.
 * Note: The numbers can be arbitrarily large and are non-negative.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  var products = [];
  var finalResult = [];
  var columns = num1.length + num2.length;
  var rows = num2.length;
  var carry = 0;
  var num1Splited = num1.split('');

  for (var i = 0, stepResult, num; i < rows; i++) {

    num = num2[i];

    if (num == 0) {
      stepResult = [0];
    }

    if (num == 1) {
      stepResult = num1Splited;
    }

    var _carry = 0;
    stepResult = Array();
    var _product = 0;

    // Single digit multiply
    for (var len = num1.length - 1; len >= 0; len--) {
      _product = num1[len] * num + _carry;
      stepResult.unshift((_product % 10));
      _carry = parseInt(_product / 10, '10');
    }

    if (_carry) {
      stepResult.unshift(_carry);
    }

    var paddingZeroes = rows - 1 - i;
    while (paddingZeroes) {
      stepResult.push(0);
      paddingZeroes--;
    }

    var zeroPaddingLeft = columns - stepResult.length;
    while (zeroPaddingLeft) {
      stepResult.unshift(0);
      zeroPaddingLeft--;
    }

    products.push(stepResult);
  }

  for (var col = columns - 1; col >= 0; col--) {
    var columnSum = 0;
    columnSum += carry;
    for (var row = rows - 1; row >= 0; row--) {
      columnSum += (products[row][col] || 0) * 1;
      carry = parseInt(columnSum / 10, '10');
    }
    finalResult.unshift(columnSum % 10);
  }

  if (carry) {
    finalResult.unshift(carry);
  }

  var trimed = finalResult.join('').replace(/^0*/, '');
  if (trimed.length) {
    return trimed;
  } else {
    return '0';
  }
};
