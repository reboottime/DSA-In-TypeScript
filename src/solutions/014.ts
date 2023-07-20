export default function getLongestCommonPrefix(inputStrs: string[]): string {
  if (inputStrs.length === 0) {
    return '';
  }

  let commonPrefix = '';
  let pointerAtFirstStr = 0;
  const [firstStr, ...restStrs] = inputStrs;

  while (pointerAtFirstStr < firstStr.length) {
    const curChar = firstStr[pointerAtFirstStr];
    let doBreak = false;

    for (let i = 0, len = restStrs.length; i < len; i++) {
      if (restStrs[i][pointerAtFirstStr] !== curChar) {
        doBreak = true;
        break;
      }
    }

    if (doBreak) {
      break;
    } else {
      commonPrefix += curChar;
    }

    pointerAtFirstStr++;
  }

  return commonPrefix;
}

/**
 * Input：array of strings
 * Output: string, a string exists in all strings as prefix
 * can you give several examples
 *
 *  1. ['flower', 'flow', 'flight'] => 'fl', why, because fl in all the strings, and is a prefix, and longest
 *  2.
 */
