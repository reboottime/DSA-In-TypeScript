export function rotate(nums: number[], k: number) {
  if (k == 0) {
    return;
  }

  const numsLength = nums.length;
  const round = k / numsLength;
  const rotateIndex = k % numsLength;

  if (round && round % 2 === 0) {
    return;
  }

  const roatedElements = nums.splice(numsLength - rotateIndex);

  nums.unshift(...roatedElements);
}

/**
 * Input:
 *  1) an array with numbers
 *  2) k: the index that starts rotate
 * output: the modified nums, rotation happens in place
 * condition:
 *   1) changes happen in place
 *   2) k is  none negative
 * can the input decide the output: yes
 * what are edge cases?
 *   the k can either be start index or the end index,
 *   or the k can be invalid, bigger than nums.length -1
 */
