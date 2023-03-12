export function search(words: string[], keyword: string): string[] {
  const searchCharacters = keyword.trim().split('');

  if (searchCharacters.length === 0) {
    return [];
  }

  let result: string[] = [...words];
  let characterLocations: number[] = [];

  while (searchCharacters.length) {
    const curCharacter = searchCharacters.shift() as string;
    const location: number[] = [];

    result = result.filter((item, i) => {
      const curLetterPosition = item.indexOf(curCharacter);
      const prevCharacterrLocation = characterLocations[i] ?? -Infinity;

      if (
        (curLetterPosition === -1) ||
        (prevCharacterrLocation > curLetterPosition)
      ) {
        return false;
      }

      location.push(curLetterPosition);

      return true;
    });

    characterLocations = location;
  }

  return result;
}
