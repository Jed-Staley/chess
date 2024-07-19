import FEN from './FEN.jsx'

function Mechanics() {
  const gameState = {
    board: [
      [
        null, null, null, null, null, null, null, null
      ],
      [
        null, null, null, null, null, null, null, null
      ],
      [
        null, null, null, null, null, null, null, null
      ],
      [
        null, null, null, null, null, null, null, null
      ],
      [
        null, null, null, null, null, null, null, null
      ],
      [
        null, null, null, null, null, null, null, null
      ],
      [
        null, null, null, null, null, null, null, null
      ],
      [
        null, null, null, null, null, null, null, null
      ]
    ],
    move: 'white',
    castle: {
      white: {
        kingside: false,
        queenside: false,
      },
      black: {
        kingside: false,
        queenside: false,
      }
    },
    enPassant: null,
    halfMoves: 0,
    fullMoves: 0
  } 

  return (
    <FEN gameState={gameState}/>
  );
}

export default Mechanics;