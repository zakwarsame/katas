/**
 * Our first challenge will be to write a function that generates a chess board like this. We will then write a function to detect weather or not the two queens are positioned so that they attack each other.
 *
 * Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.
 */

let whiteQueen = [0, 0];
let blackQueen = [5, 7];

const generateBoard = (white, black) => {
  let rowCount = 8;
  let colCount = 8;

  let board = [];

  for (let i = 0; i < rowCount; i++) {
    board.push(Array.from({ length: colCount }, (v) => 0));
  }

  board[white[0]][white[1]] = 1;
  board[black[0]][black[1]] = 1;

  return { board, white, black };
};

const queenThreat = ({ board, white, black }) => {
  // check row
  if (white[0] === black[0]) return true;
  // check colum
  if (white[1] === black[1]) return true;

  // check diagonals
  let p = white[0];
  let q = white[1];
  let x = black[0];
  let y = black[1];

  if (board[p][q] == 1 && (p + q == x + y || p - q == x - y)) {
    return true;
  }

  return false;
};

let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
