/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (!head) return head;
  const evenHead = head.next;
  if (!evenHead) return head;

  let oddP = head;
  let evenP = evenHead;

  while (true) {
    oddP.next = evenP.next;
    if (!oddP.next) break;
    oddP = oddP.next;

    evenP.next = oddP.next;
    if (!evenP.next) break;
    evenP = evenP.next;
  }

  oddP.next = evenHead;
  return head;
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

function convertLinkedListToArray(head) {
  const arr = [];
  if (!head) return arr;
  arr.push(head.val);
  let node = head;
  while (node.next) {
    arr.push(node.next.val);
    node = node.next;
  }
  return arr;
}

let head = convertArrayToLinkedList([1, 2, 3, 4, 5]);
let result = oddEvenList(head);
console.log(convertLinkedListToArray(result));

head = convertArrayToLinkedList([2, 1, 3, 5, 6, 4, 7]);
result = oddEvenList(head);
console.log(convertLinkedListToArray(result));
