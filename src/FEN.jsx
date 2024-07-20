import pieces from 'pieces.json';

function FEN({ gameState }) {
  let sections = FENstr.split(" ");
  let row = 0;
  let column = 0;

  // section 0
  for (let char of sections[0]) {
    if (char.test(/[1-8]/)) {
      column += Number(char);
    }
    if (char.test(/[prnbqkPRNBQK]/)) {
      gameState.board[row][column] = pieces[char];
    }
    if (char === '/') {
      row++;
      column = 0;
    }
  }

  // section 1
  if (sections[1] === 'w') {
    gameState.move = 'white';
  } else {
    gameState.move = 'black';
  }

  // section 2
  if (sections[2].test(/K/)) {
    gameState.castle.white.kingside = true;
  }
  if (sections[2].test(/Q/)) {
    gameState.castle.white.queenside = true;
  }
  if (sections[2].test(/k/)) {
    gameState.castle.black.kingside = true;
  }
  if (sections[2].test(/q/)) {
    gameState.castle.black.queenside = true;
  }

  // section 3
  if (!sections[3] === '/') {
    gameState.enPassant = sections[3];
  }

  // section 4
  gameState.halfMoves = Number(sections[4]);

  // section 5
  gameState.fullMoves = Number(sections[5]);

  return (
    
  );
}

export default FEN;