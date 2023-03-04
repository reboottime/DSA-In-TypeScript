function largestValues(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }

  const result: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    let curLevelSize = queue.length;
    let counter = 0;

    let curLevelMaxVal = -Infinity;

    while (counter < curLevelSize) {
      const curNode = queue.shift() as TreeNode;

      curLevelMaxVal = Math.max(curLevelMaxVal, curNode.val);

      if (curNode.left) {
        queue.push(curNode.left);
      }
      if (curNode.right) {
        queue.push(curNode.right);
      }

      counter++;
    }

    result.push(curLevelMaxVal);
  }


  return result;
};