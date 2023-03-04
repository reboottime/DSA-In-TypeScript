export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  }

  if (p !== null && q !== null) {
    let pNodeValue = p.val;
    let qNodeValue = q.val;

    if (pNodeValue === qNodeValue) {
      return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
  }

  return false;
}
