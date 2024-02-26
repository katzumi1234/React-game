import './PlayerCard.css';
import playerImg from '../../assets/player.svg';

const PlayerCard = ({player}) => {
    return (
        <div className='player-card bg-white shadow mx-3 px-5 py-2 rounded d-flex flex-column justify-content-center align-items-center'>
            <img className='player-image my-3' src={playerImg} alt='' />
            <p className='player-name'>{player.name}</p>
            <p className='player-score'>{player.score}</p>
        </div>
    )
}

export default PlayerCard;