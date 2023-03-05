export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (head === null) {
    return null;
  }

  let curNode: ListNode | null = head;
  const nodes: ListNode[] = [];

  while (curNode) {
    nodes.push(curNode);
    curNode = curNode.next;
  }

  // edge case: removing head
  if (n >= nodes.length) {
    return head.next ?? null;
  }

  const prevNode = nodes[nodes.length - n - 1];
  const nextNode = nodes[nodes.length - n + 1] ?? null; // edge case: removing tail

  prevNode.next = nextNode;

  return head;
}
