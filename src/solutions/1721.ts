/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function swapNodes(head: ListNode | null, k: number): ListNode | null {
  // Invalid cases and edge cases
  if (!head || !head.next || k < 1) {
    return head;
  }

  let curNode: ListNode | null = head;
  let count = 0;

  while (curNode) {
    count++;
    curNode = curNode.next;
  }

  let begin: ListNode = head;
  let end: ListNode = head;

  for (let i = 0; i < k - 1; i++) {
    begin = begin!.next!;
  }

  for (let i = 0; i < count - k; i++) {
    end = end!.next!;
  }

  const beginNodeValue = begin!.val;

  begin.val = end.val;
  end.val = beginNodeValue;

  return head;
}
