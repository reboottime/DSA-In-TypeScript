export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null) {
    return null;
  }

  let lowestAncestor: TreeNode | null = null;

  if (p && q) {
    const pTraversalNodes = traversal(root, p);
    const qTraversalNodes = traversal(root, q);

    while (pTraversalNodes.length && qTraversalNodes.length) {
      const pNode = pTraversalNodes.shift() as TreeNode;
      const qNode = pTraversalNodes.shift() as TreeNode;

      if (pNode?.val === qNode?.val) {
        lowestAncestor = (pNode || qNode) ?? null;
      } else {
        break;
      }
    }
  }

  return lowestAncestor;
}

function traversal(root: TreeNode | null, target: TreeNode): TreeNode[] {
  if (!root) {
    return [];
  }

  if (root.val === target.val) {
    return [root];
  }

  const leftSubTreeNodes = traversal(root.left, target);

  if (leftSubTreeNodes.length) {
    return [root, ...leftSubTreeNodes];
  }

  const rightSubTreeNodes = traversal(root.right, target);

  if (rightSubTreeNodes.length) {
    return [root, ...rightSubTreeNodes];
  }

  return [];
}
