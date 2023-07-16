import removeElement from './027';

it('test solution 27', () => {
  const array = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const val = 2;

  expect(removeElement(array, val)).toBe(9);
});
