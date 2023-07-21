import findDisappearedNumbers from './445';

describe('445', ()=> {
  it('case 1', ()=> {
    const nums = [4,3,2,7,8,2,3,1];
    const expected = [5,6];
    const output = findDisappearedNumbers(nums);
    
    expect(output).toEqual(expected);
  });
});
