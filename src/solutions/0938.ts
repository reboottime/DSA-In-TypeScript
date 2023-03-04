export function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (root === null) {
    return 0;
  }

  const { val, left, right } = root;

  let sum = isInRange(val, low, high)
    ? val
    : 0;

  if (left) {
    sum += rangeSumBST(left, low, high);
  }

  if (right) {
    sum += rangeSumBST(right, low, high);
  }

  return sum;
}

function isInRange(val: number, low: number, high: number): boolean {
  return val <= high && val >= low;
}
