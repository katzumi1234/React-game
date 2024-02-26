import './Board.css';

const Board = ({board, occupy}) => {
    return (
        <div className='board-display bg-white mx-3 p-5 rounded shadow'>
            {board.map((row, indexY) => (
                <div key={indexY} className='row'>
                    {row.map((cell, index) => (
                        <div key={index}
                        onClick={() => occupy(index, indexY)}
                        id={'cell-pos-'+indexY+'-'+index}
                        className=
                        {cell === 2 ? 'cell col-2 m-2 player2' :
                         cell === 1 ? 'cell col-2 m-2 player1' :
                         cell === 3 ? 'cell col-2 m-2 player1 completed' :
                         cell === 4 ? 'cell col-2 m-2 player2 completed' :
                         'cell col-2 m-2'}
                        ></div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Board;