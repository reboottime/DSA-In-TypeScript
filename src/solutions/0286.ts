export function wallsAndGates(rooms: number[][]): void {
  const columns = rooms[0].length;
  const rows = rooms.length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (rooms[i][j] === BlockTypes.gate) {
        const stepNo = 1;

        dfs(rooms, { row: i, column: j - 1 }, stepNo);
        dfs(rooms, { row: i, column: j + 1 }, stepNo);

        dfs(rooms, { row: i - 1, column: j }, stepNo);
        dfs(rooms, { row: i + 1, column: j }, stepNo);
      }
    }
  }
}

function dfs(rooms: number[][], block: TBlock, stepNo: number): void {
  const { column, row } = block;

  if (
    isWithinBorder(rooms, block) &&
    (rooms[row][column] > stepNo)
  ) {
    rooms[row][column] = stepNo;

    const nextStepNo = stepNo + 1;

    dfs(rooms, { row, column: column - 1 }, nextStepNo);
    dfs(rooms, { row, column: column + 1 }, nextStepNo);

    dfs(rooms, { row: row - 1, column }, nextStepNo);
    dfs(rooms, { row: row + 1, column }, nextStepNo);
  }
}

function isWithinBorder(rooms: number[][], block: TBlock): boolean {
  const { row, column } = block;

  const ROW_MAX_VALUE = rooms.length - 1;
  const ROW_MIN_VALUE = 0;

  const COLUMN_MAX_VALUE = rooms[0].length - 1;
  const COLUMN_MIN_VALUE = 0;

  if (
    row <= ROW_MAX_VALUE &&
    row >= ROW_MIN_VALUE &&
    column <= COLUMN_MAX_VALUE &&
    column >= COLUMN_MIN_VALUE
  ) {
    return true;
  }

  return false;
}

enum BlockTypes {
  emptyRoom = 2147483647,
  wall = -1,
  gate = 0,
}

type TBlock = {
  column: number;
  row: number;
};
