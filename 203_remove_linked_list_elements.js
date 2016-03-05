/**
 * https://leetcode.com/problems/remove-linked-list-elements/
 *
 * Remove all elements from a linked list of integers that have value val.
 *
 * Example
 * Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
 * Return: 1 --> 2 --> 3 --> 4 --> 5
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  var currentNode;
  var nodeList = [];

  if (!head) {
    return nodeList;
  }

  if (head.val === val) {
    currentNode = head.next;
  } else {
    currentNode = head;
  }

  while (currentNode) {
    if (currentNode.val !== val) {
      nodeList.push(currentNode.val);
    }

    currentNode = currentNode.next;
  }

  return nodeList;
};
