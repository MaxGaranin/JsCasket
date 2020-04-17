function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  const { maxDiam } = calculate(root);
  return maxDiam;

  function calculate(node) {
    if (!node) return {maxLength: 0, maxDiam: 0};

    let maxLength1 = 0;
    let maxDiam1 = 0;
    if (node.left) {
      const result = calculate(node.left);
      maxLength1 = result.maxLength;
      maxDiam1 = result.maxDiam;
    }

    let maxLength2 = 0;
    let maxDiam2 = 0;
    if (node.right) {
      const result = calculate(node.right);
      maxLength2 = result.maxLength;
      maxDiam2 = result.maxDiam;
    }

    const maxDiam = maxLength1 + maxLength2;
    return {
      maxLength: Math.max(maxLength1, maxLength2) + 1,
      maxDiam: Math.max(maxDiam, maxDiam1, maxDiam2),
    };
  }
};

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
const leftNode = tree.left;
leftNode.left = new TreeNode(4);
leftNode.right = new TreeNode(5);

const result = diameterOfBinaryTree(tree);
console.log(result);
