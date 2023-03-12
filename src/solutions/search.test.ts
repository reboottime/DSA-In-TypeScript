import { search } from './search';

it('case complicated', () => {
  const words = ['acd', 'acbd', 'ac', 'ca'];
  const keyword = 'acd';

  const result = search(words, keyword);

  expect(result).toEqual(['acd', 'acbd']);
});
