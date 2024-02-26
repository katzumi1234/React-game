import Board from "../Components/Board/Board";
import GameController from "../Components/GameController/GameController";
import InGameMenu from "../Components/InGameMenu/InGameMenu";
import PlayerCard from "../Components/PlayerCard/PlayerCard";
import { useState } from "react";
import { checkWin, checkGameCompleted } from "../utils/boardControl";

const Game = () => {
    const [board, setBoard] = useState([
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]
    ]);
    const [gameStatus, setGameStatus] = useState({
        playerIDRound: 0,
        isWin: false
    })
    const [player1, setPlayer1] = useState({
        id: 0,
        name: 'Player 1',
        score: 0
    })
    const [player2, setPlayer2] = useState({
        id: 1,
        name: 'Player 2',
        score: 0
    })

    const useOccupy = (posx, posy) => {
        let newBoard = board;
        if(gameStatus.playerIDRound === 0 && board[posy][posx] === 0)
        {
            board[posy][posx] = 1;
            setGameStatus({...gameStatus, playerIDRound: 1})
        } else if(gameStatus.playerIDRound === 1)
        {
            board[posy][posx] = 2;
            setGameStatus({...gameStatus, playerIDRound: 0})
        }
        setBoard(newBoard);
        checkWin(posx,posy,board,gameStatus.playerIDRound,setPlayer1,setPlayer2,player1,player2);
        checkGameCompleted(board, player1, player2, setGameStatus);
    }
    return (
        <div className="game">
            <div className="d-flex justify-content-center align-items-center">
                <InGameMenu />
            </div>
            <div className="game-panel d-flex align-items-center justify-content-center my-5">
                <PlayerCard player={player1} />
                <Board board={board} occupy={useOccupy} gameStatus={gameStatus} setGameStatus={setGameStatus} />
                <PlayerCard player={player2} />
            </div>
            <div className="game-controller justify-content-center user-select-none d-flex align-items-center my-3">
                <GameController gameStatus={gameStatus} />
            </div>
        </div>
    )
}

export default Game;