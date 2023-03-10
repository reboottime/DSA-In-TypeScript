export function search(nums: number[], target: number): number {
  if (nums.length <= 1) {
    return nums[0] === target
      ? 0
      : -1;
  }

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    const valueAtMid = nums[mid];

    if (valueAtMid === target) {
      return mid;
    } else if (valueAtMid >= nums[start]) {
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}
