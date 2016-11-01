/**
 * https://leetcode.com/problems/add-two-numbers/
 *
 * You are given two linked lists representing two non-negative numbers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 *
 * Example:
 *
 *   Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 *   Output: 7 -> 0 -> 8
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }

 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var head1 = l1;
  var head2 = l2;
  var carry = 0;
  var sum = 0;
  var result = [];

  while (head1 || head2) {
    sum = (head1 && head1.val || 0) + (head2 && head2.val || 0) + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
    head1 = head1 ? head1.next : null;
    head2 = head2 ? head2.next : null;
  }

  if (carry) {
    result.push(carry);
  }

  return result;
};
