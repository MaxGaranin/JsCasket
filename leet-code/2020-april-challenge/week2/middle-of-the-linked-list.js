/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  const arr = [];
  let currentNode = head;
  while (currentNode) {
    arr.push(currentNode);
    currentNode = currentNode.next;
  }

  const div = Math.floor(arr.length / 2);
  return arr[div];
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function convertArrayToLinkedList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    current.next = node;
    current = node;
  }
  return head;
}

let head = convertArrayToLinkedList([1, 2, 3, 4, 5]);
let result = middleNode(head);
console.log(result);

head = convertArrayToLinkedList([1, 2, 3, 4, 5, 6]);
result = middleNode(head);
console.log(result);
