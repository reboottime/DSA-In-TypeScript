export function findPeakElement(nums: number[]): number {
  if (nums.length === 1) {
    return 0;
  }

  let counter = 0;
  const numsLength = nums.length;

  let leftValue = -Infinity;

  while (counter < numsLength - 1) {
    const curValue = nums[counter];
    const rightValue = nums[counter + 1];

    const maxValue = Math.max(curValue, rightValue, leftValue);

    if (maxValue === curValue) {
      return counter;
    } else {
      leftValue = curValue;
    }

    counter++;
  }

  return numsLength - 1;
}

/**
 * what is the input: an array of numbers
 * what is the output: the index of the first found peak element
 * condition:
 *  1) peak element defintion
 *  2) time complexity limitation: O(logn);
 * can you give serveral examples
 *   even length array
 *   odd length array
 */

// The worst case time complexity for current solution is O(n);
