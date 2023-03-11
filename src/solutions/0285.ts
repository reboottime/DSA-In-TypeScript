export function inorderSuccessor(
  root: TreeNode | null,
  p: TreeNode | null
): TreeNode | null {
  if (root === null || p === null) {
    return null;
  }

  const treeNodes = traversal(root);

  let minDiff = Infinity;
  let counter = 0;
  const end = treeNodes.length;

  let foundNode = null;

  let pNodeIndex = Infinity;

  while (counter < end) {
    const curNode = treeNodes[counter];
    const valueDiff = curNode.val - p.val;

    if (valueDiff > 0 && valueDiff < minDiff && pNodeIndex < counter) {
      foundNode = curNode;
      minDiff = valueDiff;
    }

    if (curNode === p) {
      pNodeIndex = counter;
    }

    counter++;
  }

  return foundNode;
}

function traversal(root: TreeNode | null): TreeNode[] {
  if (root === null) {
    return [];
  }

  const { left, right } = root;

  const leftSubTreeNodes = traversal(left);
  const rightSubTreeNodes = traversal(right);

  return [...leftSubTreeNodes, root, ...rightSubTreeNodes];
}

/**
 * Input: two nodes, one is the root, another is a node inside of the tree represneted by root
 * Output: return the node matched the requirements
 * what is the condition
 *  1) in order traversal
 *  2) the matched node
 *    (1) has smallest value differences to target node (positive)
 *    (2) comes after the target node
 */
