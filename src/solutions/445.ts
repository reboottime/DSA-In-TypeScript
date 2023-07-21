export default function findDisappearedNumbers(nums: number[]): number[] {
  const allNums = Object.keys(nums).map((n) => Number(n)+1);
  const allValues = Object.values(nums);

  return allNums
    .filter((num) => !allValues.includes(num));
}
