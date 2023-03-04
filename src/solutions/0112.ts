export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  // depth first
  if (root === null) {
    return false;
  }

  if (root.left == null && root.right == null) {
    return root.val === targetSum;
  }

  const remainingTargetSum = targetSum - root.val;

  return hasPathSum(root.left, remainingTargetSum) || hasPathSum(root.right, remainingTargetSum);
}
