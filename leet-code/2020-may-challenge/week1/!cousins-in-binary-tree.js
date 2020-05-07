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

//------------------------------------
function BinaryTree() {
  this.root = null;
  this.count = 0;
}

BinaryTree.prototype.add = function (val) {
  if (!this.root) {
    this.root = new TreeNode(val);
    this.count++;
  } else {
    this.addTo(this.root, val);
  }
};

BinaryTree.prototype.addTo = function (node, val) {
  if (val < node.val) {
    if (!node.left) {
      node.left = new TreeNode(val);
      this.count++;
    } else {
      this.addTo(node.left, val);
    }
  } else {
    if (!node.right) {
      node.right = new TreeNode(val);
      this.count++;
    } else {
      this.addTo(node.right, val);
    }
  }
};
//------------------------------------

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  return processChildren([root]);

  function processChildren(nodes) {
    const nextNodes = [];

    let isFoundX = false;
    let isFoundY = false;
    let parentX = null;
    let parentY = null;

    for (const node of nodes) {
      processNode(node.left);
      if (node.left) nextNodes.push(node.left);

      processNode(node.right);
      if (node.right) nextNodes.push(node.right);

      if (isFoundX && !parentX) parentX = node;
      if (isFoundY && !parentY) parentY = node;
    }

    if (isFoundX && isFoundY && parentX.val !== parentY.val) {
      return true;
    } else if (isFoundX || isFoundY) {
      return false;
    } else {
      return processChildren(nextNodes);
    }

    function processNode(node) {
      if (node) {
        if (node.val === x) {
          isFoundX = true;
        } else if (node.val === y) {
          isFoundY = true;
        }
      }
    }
  }
};

let tree = new Tree([1, 2, 3, 4]);
let result = isCousins(tree.root, 4, 3);
console.log(result);

tree = new Tree([1, 2, 3, null, 4, null, 5]);
result = isCousins(tree.root, 5, 4);
console.log(result);

tree = new Tree([1, 2, 3, null, 4]);
result = isCousins(tree.root, 2, 3);
console.log(result);

tree = new Tree([1, null, 2, 3, null, null, 4, null, 5]);
result = isCousins(tree.root, 1, 3);
console.log(result);
