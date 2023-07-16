/**
 * 
 * @param nums List of numbers
 * @param val Value to remove
 * @returns count, the number of elements that are not equal to val
 */
function removeElement(nums: number[], val: number): number {
  let k = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[k++] = nums[j];
    }
  }

  return k;
}
