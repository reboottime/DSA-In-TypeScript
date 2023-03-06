/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function rightSideView(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }

  const values: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const curLevelSize = queue.length;
    let counter = 0;
    let curNode: TreeNode | null = null;

    while (counter < curLevelSize) {
      curNode = queue.shift() as TreeNode;

      if (curNode.left) {
        queue.push(curNode.left);
      }

      if (curNode.right) {
        queue.push(curNode.right);
      }

      counter++;
    }

    values.push(curNode!.val);
  }

  return values;
}
// problem I had for my previous version, I did not think of all the cases for right sid views
