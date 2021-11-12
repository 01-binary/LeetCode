/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head === null) return head;
  while (head && head.val === val) {
    head = head.next;
  }

  let currentNode = head;
  let prevNode;

  while (currentNode) {
    //1 2 2 1 | 2 2 1
    if (currentNode.val === val) {
      prevNode.next = currentNode.next; // 1 2 1
    }
    else {
      prevNode = currentNode; // 1 2 2 1 |
    }
    currentNode = currentNode.next; // 2 2 1
  }

  return head;
};

