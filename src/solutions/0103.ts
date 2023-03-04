export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }

  const result: number[][] = [];
  const queue: TreeNode[] = [root];

  let curRound = 0;

  while (queue.length) {
    const curLevelSize = queue.length;
    const curLevelValues: number[] = [];

    let counter = 0;

    while (counter < curLevelSize) {
      const curNode = queue.shift() as TreeNode;

      const { left, right, val } = curNode;

      if (left) {
        queue.push(left);
      }

      if (right) {
        queue.push(right);
      }
      
      curLevelValues.push(val);

      counter++;
    }

    curRound++;

    if (curRound % 2 === 1) {
      curLevelValues.reverse();
    }

    result.push(curLevelValues);
  }

  return result;
};