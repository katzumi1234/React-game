import { Link } from 'react-router-dom';
import './ShowRules.css';

const ShowRules = () => {
    return (
        <div className='menu-panel d-flex flex-column align-items-center p-5 rounded bg-white shadow mt-5'>
            <h1 className='text-center my-4'>Connect four - Rules</h1>
            <p className='my-5'>
                <b>How to win?</b>
                <hr className='my-3' />
                <p>
                    You have to connect 4 dots to win before your opponent.
                </p>
            </p>
            <Link to='/'>
                <button className='btn-hero btn'>Back</button>
            </Link>
        </div>
    )
}

export default ShowRules;