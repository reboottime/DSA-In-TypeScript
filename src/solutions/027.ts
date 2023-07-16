/**
 *
 * @param nums an array with numbers
 * @param val a number
 * @returns the count of values that are not val
 */
export default function removeElement(nums: number[], val: number): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count++] = nums[i];
    }
  }

  return count;
}
