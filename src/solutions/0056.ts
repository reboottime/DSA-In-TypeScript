export function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) {
    return intervals;
  }

  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  const merged: TRange[] = [sorted.shift() as TRange];

  while (sorted.length) {
    const mergedLength = merged.length;
    const theLastInMerged = merged[mergedLength - 1];
    const theFirstInSorted = sorted.shift() as TRange;

    if (hasOverlap(theLastInMerged, theFirstInSorted)) {
      const min = Math.min(...theLastInMerged, ...theFirstInSorted);
      const max = Math.max(...theLastInMerged, ...theFirstInSorted);

      merged[mergedLength - 1] = [min, max];
    } else {
      merged.push(theFirstInSorted);
    }
  }

  return merged;
}

function hasOverlap(r1: TRange, r2: TRange): boolean {
  const [r1Min, r1Max] = r1;
  const [r2Min, r2Max] = r2;

  return (r2Min <= r1Max) || (r2Max <= r1Min);
}

type TRange = [min: number, max: number];
