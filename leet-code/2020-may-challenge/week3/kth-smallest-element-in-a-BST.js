function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function Tree(arr) {
  this.root = null;
  this.count = 0;
  if (arr) this.fill(arr);
}

Tree.prototype.fill = function (arr) {
  this.root = new TreeNode(arr[0]);
  this.count++;
  this.processNodes([this.root], arr, 1);
};

Tree.prototype.processNodes = function (nodes, arr, index) {
  const nextNodes = [];
  for (const node of nodes) {
    if (!arr[index]) {
      index++;
      this.count++;
      if (index >= arr.length) return;
    } else {
      if (!node.left) {
        node.left = new TreeNode(arr[index]);
        index++;
        this.count++;
        if (index >= arr.length) return;
      }
      nextNodes.push(node.left);
    }

    if (!arr[index]) {
      index++;
      this.count++;
      if (index >= arr.length) return;
    } else {
      if (!node.right) {
        node.right = new TreeNode(arr[index]);
        index++;
        this.count++;
        if (index >= arr.length) return;
      }
      nextNodes.push(node.right);
    }
  }

  if (nextNodes.length > 0) {
    this.processNodes(nextNodes, arr, index);
  }
};

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let i = 0;
  let isFound = false;
  let result = null;

  inOrderKth(root);
  return result;

  function inOrderKth(node) {
    if (!node) return;

    inOrderKth(node.left);
    if (isFound) return;

    i++;
    if (i === k) {
      isFound = true;
      result = node.val;
      return;
    }

    inOrderKth(node.right);
    if (isFound) return;
  }
};

let tree = new Tree([5, 3, 6, 2, 4, null, null, 1]);
let result = kthSmallest(tree.root, 3);
console.log(result);
