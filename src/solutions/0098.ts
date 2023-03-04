export function isValidBST(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  const { val, right, left } = root;

  return isValidBSTNode(left, -Infinity, val) && isValidBSTNode(right, val, Infinity);
}

function isValidBSTNode(root: TreeNode | null, low: number, high: number): boolean {
  if (!root) {
    return true;
  }

  const { val, left, right } = root;

  return (
    val < high &&
    val > low &&
    isValidBSTNode(left, low, val) &&
    isValidBSTNode(right, val, high)
  );
}
