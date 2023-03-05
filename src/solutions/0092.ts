/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (
    (head === null) ||
    !head.next ||
    (left === right) ||
    (left < 1)
  ) {
    return head;
  }

  let length = 0;
  const nodes: ListNode[] = [];
  let curNode: ListNode | null = head;

  while (curNode) {
    length++;
    nodes.push(curNode);
    curNode = curNode.next;
  }

  // out of border
  if (right > length) {
    return head;
  }

  let leftIndex = left - 1;
  let rightIndex = right - 1;

  while (leftIndex <= rightIndex) {
    const leftNode = nodes[leftIndex];
    const rightNode = nodes[rightIndex];

    swapNodeValue(leftNode, rightNode);

    leftIndex++;
    rightIndex--;
  }

  return head;
}

// is not a  pure function
function swapNodeValue(n1: ListNode, n2: ListNode) {
  const n2Val = n2.val;

  n2.val = n1.val;
  n1.val = n2Val;
}
