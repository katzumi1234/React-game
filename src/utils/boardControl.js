const checkWin = (posx, posy, board, playerID, setPlayer1, setPlayer2, player1, player2) => {
  if (
    posx + 1 < board.length &&
    board[posy][posx + 1] === playerID + 1 &&
    posx + 2 < board.length &&
    board[posy][posx + 2] === playerID + 1 &&
    posx + 3 < board.length &&
    board[posy][posx + 3] === playerID + 1
  ) {
    let newBoard = board;
    if (playerID === 0) {
      newBoard[posy][posx] = 3;
      newBoard[posy][posx + 1] = 3;
      newBoard[posy][posx + 2] = 3;
      newBoard[posy][posx + 3] = 3;
      setPlayer1({ ...player1, score: player1.score + 1 });
    } else {
      newBoard[posy][posx] = 4;
      newBoard[posy][posx + 1] = 4;
      newBoard[posy][posx + 2] = 4;
      newBoard[posy][posx + 3] = 4;
      setPlayer2({ ...player2, score: player2.score + 1 });
    }
  }
  if (
    posx - 1 >= 0 &&
    board[posy][posx - 1] === playerID + 1 &&
    posx - 2 >= 0 &&
    board[posy][posx - 2] === playerID + 1 &&
    posx - 3 >= 0 &&
    board[posy][posx - 3] === playerID + 1
  ) {
    let newBoard = board;
    if (playerID === 0) {
      newBoard[posy][posx] = 3;
      newBoard[posy][posx - 1] = 3;
      newBoard[posy][posx - 2] = 3;
      newBoard[posy][posx - 3] = 3;
      setPlayer1({ ...player1, score: player1.score + 1 });
    } else {
      newBoard[posy][posx] = 4;
      newBoard[posy][posx - 1] = 4;
      newBoard[posy][posx - 2] = 4;
      newBoard[posy][posx - 3] = 4;
      setPlayer2({ ...player2, score: player2.score + 1 });
    }
  }
  if (
    posy + 1 < board.length &&
    board[posy + 1][posx] === playerID + 1 &&
    posy + 2 < board.length &&
    board[posy + 2][posx] === playerID + 1 &&
    posy + 3 < board.length &&
    board[posy + 3][posx] === playerID + 1
  ) {
    let newBoard = board;
    if (playerID === 0) {
      newBoard[posy][posx] = 3;
      newBoard[posy + 1][posx] = 3;
      newBoard[posy + 2][posx] = 3;
      newBoard[posy + 3][posx] = 3;
      setPlayer1({ ...player1, score: player1.score + 1 });
    } else {
      newBoard[posy][posx] = 4;
      newBoard[posy + 1][posx] = 4;
      newBoard[posy + 2][posx] = 4;
      newBoard[posy + 3][posx] = 4;
      setPlayer2({ ...player2, score: player2.score + 1 });
    }
  }
  if (
    posy - 1 >= 0 &&
    board[posy - 1][posx] === playerID + 1 &&
    posy - 2 >= 0 &&
    board[posy - 2][posx] === playerID + 1 &&
    posy - 3 >= 0 &&
    board[posy - 3][posx] === playerID + 1
  ) {
    let newBoard = board;
    if (playerID === 0) {
      newBoard[posy][posx] = 3;
      newBoard[posy - 1][posx] = 3;
      newBoard[posy - 2][posx] = 3;
      newBoard[posy - 3][posx] = 3;
      setPlayer1({ ...player1, score: player1.score + 1 });
    } else {
      newBoard[posy][posx] = 4;
      newBoard[posy - 1][posx] = 4;
      newBoard[posy - 2][posx] = 4;
      newBoard[posy - 3][posx] = 4;
      setPlayer2({ ...player2, score: player2.score + 1 });
    }
  }

  if (
    posx + 1 < board.length &&
    posy + 1 < board.length &&
    board[posy + 1][posx + 1] === playerID + 1 &&
    posx + 2 < board.length &&
    posy + 2 < board.length &&
    board[posy + 2][posx + 2] === playerID + 1 &&
    posx + 3 < board.length &&
    posy + 3 < board.length &&
    board[posy + 3][posx + 3] === playerID + 1
  ) {
    let newBoard = board;
    if (playerID === 0) {
      newBoard[posy][posx] = 3;
      newBoard[posy + 1][posx + 1] = 3;
      newBoard[posy + 2][posx + 2] = 3;
      newBoard[posy + 3][posx + 3] = 3;
      setPlayer1({ ...player1, score: player1.score + 1 });
    } else {
      newBoard[posy][posx] = 4;
      newBoard[posy + 1][posx + 1] = 4;
      newBoard[posy + 2][posx + 2] = 4;
      newBoard[posy + 3][posx + 3] = 4;
      setPlayer2({ ...player2, score: player2.score + 1 });
    }
  }

  if (
    posx - 1 >= 0 &&
    posy - 1 >= 0 &&
    board[posy - 1][posx - 1] === playerID + 1 &&
    posx - 2 >= 0 &&
    posy - 2 >= 0 &&
    board[posy - 2][posx - 2] === playerID + 1 &&
    posx - 3 >= 0 &&
    posy - 3 >= 0 &&
    board[posy - 3][posx - 3] === playerID + 1
  ) {
    let newBoard = board;
    if (playerID === 0) {
      newBoard[posy][posx] = 3;
      newBoard[posy - 1][posx - 1] = 3;
      newBoard[posy - 2][posx - 2] = 3;
      newBoard[posy - 3][posx - 3] = 3;
      setPlayer1({ ...player1, score: player1.score + 1 });
    } else {
      newBoard[posy][posx] = 4;
      newBoard[posy - 1][posx - 1] = 4;
      newBoard[posy - 2][posx - 2] = 4;
      newBoard[posy - 3][posx - 3] = 4;
      setPlayer2({ ...player2, score: player2.score + 1 });
    }
  }
  if (
    posx - 1 >= 0 &&
    posy + 1 < board.length &&
    board[posy + 1][posx - 1] === playerID + 1 &&
    posx - 2 >= 0 &&
    posy + 2 < board.length &&
    board[posy + 2][posx - 2] === playerID + 1 &&
    posx - 3 >= 0 &&
    posy + 3 < board.length &&
    board[posy + 3][posx - 3] === playerID + 1
  ) {
    let newBoard = board;
    if (playerID === 0) {
      newBoard[posy][posx] = 3;
      newBoard[posy + 1][posx - 1] = 3;
      newBoard[posy + 2][posx - 2] = 3;
      newBoard[posy + 3][posx - 3] = 3;
      setPlayer1({ ...player1, score: player1.score + 1 });
    } else {
      newBoard[posy][posx] = 4;
      newBoard[posy + 1][posx - 1] = 4;
      newBoard[posy + 2][posx - 2] = 4;
      newBoard[posy + 3][posx - 3] = 4;
      setPlayer2({ ...player2, score: player2.score + 1 });
    }
  }
  if (
    posx + 1 < board.length &&
    posy - 1 >= 0 &&
    board[posy - 1][posx + 1] === playerID + 1 &&
    posx + 2 < board.length &&
    posy - 2 >= 0 &&
    board[posy - 2][posx + 2] === playerID + 1 &&
    posx + 3 < board.length &&
    posy - 3 >= 0 &&
    board[posy - 3][posx + 3] === playerID + 1
  ) {
    let newBoard = board;
    if (playerID === 0) {
      newBoard[posy][posx] = 3;
      newBoard[posy - 1][posx + 1] = 3;
      newBoard[posy - 2][posx + 2] = 3;
      newBoard[posy - 3][posx + 3] = 3;
      setPlayer1({ ...player1, score: player1.score + 1 });
    } else {
      newBoard[posy][posx] = 4;
      newBoard[posy - 1][posx + 1] = 4;
      newBoard[posy - 2][posx + 2] = 4;
      newBoard[posy - 3][posx + 3] = 4;
      setPlayer2({ ...player2, score: player2.score + 1 });
    }
  }
};

const checkGameCompleted = (board, player1, player2, setGameStatus) => {
  let isCompleted = true;
  let playerWon = undefined;
  board.forEach((row) => {
      row.forEach((cell) => {
          if(cell === 0)
              isCompleted = false;
      })
  })
  if(isCompleted) {
      if(player1.score > player2.score) {
          playerWon = player1.id;
      }
      else if(player2.score > player1.score) {
          playerWon = player2.id;
      } else {
          playerWon = 'remiza';
      }
      setGameStatus({playerIDRound: playerWon, isWin: true})
  }
}
export {
  checkWin,
  checkGameCompleted
};