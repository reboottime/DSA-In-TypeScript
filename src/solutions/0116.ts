declare interface Node {
  left: Node | null;
  right: Node | null;
  next?: Node | null;
  val: number;
}

export function connect(root: Node | null): Node | null {
  if (root === null) {
    return null;
  }

  const queue = new Array<Node>();

  while (queue.length) {
    const curLevelSize = queue.length;
    let counter = 0;
    let prevNode: Node | null = null;

    while (curLevelSize > counter) {
      const curNode = queue.shift() as Node;

      if (curNode.left) {
        queue.push(curNode.left);
      }

      if (curNode.right) {
        queue.push(curNode.right);
      }

      if (prevNode) {
        prevNode.next = curNode;
      }

      prevNode = curNode;

      counter++;
    }
  }

  return root;
}
