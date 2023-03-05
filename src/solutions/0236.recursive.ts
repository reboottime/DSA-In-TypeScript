export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null) {
    return null;
  }

  if (root === p) {
    return p;
  }

  if (root === q) {
    return q;
  }

  const leftSubTreeNode = lowestCommonAncestor(root.left, p, q);
  const rightSubTreeNode = lowestCommonAncestor(root.right, p, q);

  if (leftSubTreeNode === null) {
    return rightSubTreeNode;
  }

  if (rightSubTreeNode === null) {
    return leftSubTreeNode;
  }

  return root;
}
