function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  let i = 0;
  const root = addNodes(preorder[0]);
  return root;

  function addNodes(parentValue) {
    const value = preorder[i];
    if (!value) return null;
    const node = new TreeNode(value);

    i++;
    const leftValue = preorder[i];
    if (leftValue && leftValue > parentValue) return { node, val: leftValue, result: false };
    const leftObj = addNodes(node.val);
    if (!leftObj) return null;
    node.left = leftObj.node;
    if (!leftObj.result && leftObj.val > parentValue) return { node, result: false };

    i++;
    const rightValue = preorder[i];
    if (rightValue && rightValue > parentValue) return { node, val: rightValue, result: false };
    const rightObj = addNodes(node.val);
    if (!rightObj) return null;
    node.right = rightObj.node;
    if (!rightObj.result && rightObj.val > parentValue) return { node, result: false };

    return {node, result: true};
  }
};

let result = bstFromPreorder([8, 5, 1, 7, 10, 12]);
console.log(result);
