/**
 * https://leetcode.com/problems/roman-to-integer/
 *
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var mapper = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  var values = [];
  var arr = s.split('');
  for (var i = 0, cur = null, nxt = null; i < arr.length; i++) {
    nxt = arr[i + 1];
    cur = arr[i];
    if (!nxt || mapper[nxt] <= mapper[cur]) {
      values.push(mapper[cur]);
    } else {
      values.push(mapper[cur] * -1);
    }
  }
  return values.reduce(function(v1, v2) {
    return v1 + v2;
  }, 0);
};
