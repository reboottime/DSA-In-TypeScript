export function search(words: string[], keyword: string): string[] {
  const searchTerm = keyword.trim();

  if (searchTerm === '') {
    return [];
  }

  if (searchTerm.length === 1) {
    return words.filter((word) => word.indexOf(searchTerm) != -1);
  }

  let result: string[] = [...words];
  let location: number[] = [];

  const searchLetters = searchTerm.split('');

  while (searchLetters.length) {
    const curLetter = searchLetters.shift() as string;
    const newLocation: number[] = [];

    result = result.filter((item, i) => {
      const curLetterPosition = item.indexOf(curLetter);
      const prevLetterLocation = location[i] ?? -Infinity;

      if (
        (curLetterPosition === -1) ||
        (prevLetterLocation > curLetterPosition)
      ) {
        return false;
      }

      newLocation.push(curLetterPosition);

      return true;
    });

    location = newLocation;
  }

  return result;
}
