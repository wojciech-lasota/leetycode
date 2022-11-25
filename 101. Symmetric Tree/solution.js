/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const left = [root.left];

  const right = [root.right];

  while (left.length && right.length) {
    const newLeft = left.pop();

    const newRight = right.pop();

    if (newLeft === newRight) {
      continue;
    }
    if (newLeft && newRight) {
      if (newLeft.val != newRight.val) {
        return false;
      }
      left.push(newLeft.right);

      left.push(newLeft.left);

      right.push(newRight.left);

      right.push(newRight.right);

      continue;
    }
    return false;
  }
  return true;
};
