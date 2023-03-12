export function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) {
    return s.length;
  }

  let maxLength = 0;
  let subString = '';

  for (let i = 0; i < s.length; i++) {
    const curLetter = s.charAt(i);
    const position = subString.indexOf(curLetter);

    if (position !== -1) {
      subString = subString.slice(position + 1);
    }

    subString += curLetter;
    maxLength = Math.max(maxLength, subString.length);
  }

  return maxLength;
}

/***
 * The mental model
 * start step
 * at the i step, 
 *  what should I have, what should do with it 
 *  => previous setup before moving to the i step
 */
