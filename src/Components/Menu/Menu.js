import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <div className='menu-panel d-flex flex-column align-items-center p-5 rounded bg-white shadow mt-5'>
            <h1 className='text-center my-4'>Connect four - Play now</h1>
            <ul className='d-flex flex-column justify-content-center align-items-center menu'>
                <li className='my-3'>
                    <Link to='/game'>
                        <button className='btn-hero btn text-center'>Play</button>
                    </Link>
                </li>
                <li className='my-3'>
                    <Link to='/rules'>
                        <button className='btn-hero btn text-center'>Rules</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;