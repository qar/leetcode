/**
 * https://leetcode.com/problems/isomorphic-strings/
 *
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var isIsomorphic = true;
  var gaps = {};
  var gaps2 = {};
  for (var i = 0; i < t.length; i++) {
      if (!gaps[t[i]] && !gaps2[s[i]]) {
          gaps[t[i]] = s[i];
          gaps2[s[i]] = t[i];
      } else if (gaps[t[i]] !== s[i]) {
          isIsomorphic = false;
          break;
      }
  }
  return isIsomorphic;
};
