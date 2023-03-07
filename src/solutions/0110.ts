export function isBalanced(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  const leftSubTreeHeight = getNodeHeight(root.left);
  const rightSubTreeHeight = getNodeHeight(root.right);

  const rootIsBalanced = Math.abs(leftSubTreeHeight - rightSubTreeHeight) <= 1;

  return isBalanced(root.left) && isBalanced(root.right) && rootIsBalanced;
}

/**
 * what is the input? The root of a tree
 * can the input decide the output: yes
 * what is the condition: height definition
 * what are edge cases
 *  1) empty tree
 */

function getNodeHeight(node: TreeNode | null): number {
  if (node === null) {
    return -1;
  }

  return Math.max(getNodeHeight(node.right), getNodeHeight(node.left)) + 1;
}
