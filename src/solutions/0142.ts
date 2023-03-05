export function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let curNode: ListNode | null = head;
  const listNodeSet = new Set<ListNode>();

  while (curNode) {
    if (listNodeSet.has(curNode)) {
      return curNode;
    } else {
      listNodeSet.add(curNode);
    }

    curNode = curNode.next;
  }

  return null;
}
