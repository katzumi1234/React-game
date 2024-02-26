import './GameController.css';
import Swal from 'sweetalert2'

const GameController = ({gameStatus}) => {

    if(gameStatus.isWin){
        if(gameStatus.playerIDRound !== 'remiza')
            Swal.fire({
                title: "Congratulations!",
                text: `Player ${gameStatus.playerIDRound + 1} has won!`,
                icon: "success",
                showConfirmButton: true
            }).then((result) => {
                if(result.isConfirmed) {
                    window.location.href = '/';
                }
            })
        else
            Swal.fire({
                title: "Match even!",
                text: `No one has won!`,
                icon: "info",
                showConfirmButton: true
            }).then((result) => {
                if(result.isConfirmed) {
                    window.location.href = '/';
                }
            })
    }
    return (
        <div className='w-25 bg-danger d-flex justify-content-center align-items-center p-5 rounded shadow text-white'>
            <h2 className='text-hero'>Player {gameStatus.playerIDRound + 1}'s Turn</h2>
        </div>
    )
}

export default GameController;