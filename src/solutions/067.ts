function addBinary(a: string, b: string): string {
  const aNumbers = a.split("").map((n) => parseInt(n));
  const bNumbers = b.split("").map((n) => parseInt(n));

  const result: number[] = [];
  let levelUp = 0;

  while (aNumbers.length) {
    const aNum = aNumbers.pop()!;
    const bNum = bNumbers.pop() ?? 0;

    let sum = levelUp + aNum + bNum;

    levelUp = Math.floor(sum / 2);
    sum = sum % 2;

    result.unshift(sum);
  }

  while (bNumbers.length) {
    const bNum = bNumbers.pop()!;
    let sum = levelUp + bNum;

    levelUp = Math.floor(sum / 2);
    sum = sum % 2;

    result.unshift(sum);
  }

  if (levelUp) {
    result.unshift(levelUp);
  }

  return result.join("");
}
