# Linked List

## Concepts

- structure

  ```ts
  type LinkedList<T> = {
    next: LinkedList | null;
    val: T;
  };
  ```

- length

  ```ts
  let curNode = head;
  let length = 0;

  while (curNode) {
    length++;
    curNode = curNode.next;
  }
  ```

---

### Math with LinkedList

- the nth node from begining
- distance of node a and b
  ```ts
  const distance = b - (a - 1);
  ```
- the mirror node at kth index of an array, 1-index started

  ```ts
    const getMirrorIndex = (values: number[], k:number) {
      const length = values.length;

      if(k <0 || k > length -1) {
        throw new Error(`k goes out of array boundary`);
      }

     // const leftIndex = k -1;
     // const rightIndex = (length-1) - (k-1);

      return length - k;
    }
  ```

### Patterns

- swap nodes => swap values
- `ts leftIndex <=rightIndex`
