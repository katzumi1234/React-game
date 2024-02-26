import { Link } from 'react-router-dom';
import './InGameMenu.css';
import logo from '../../assets/logo.svg';

const InGameMenu = () => {
    return (
        <div className='w-50 d-flex justify-content-between align-items-center'>
            <Link to='/'>
                <button className='btn-hero btn'>Menu</button>
            </Link>
            <img className='logo' src={logo} alt='' />
            <Link to='/rules'>
                <button className='btn-hero btn'>Rules</button>
            </Link>
        </div>
    )
}

export default InGameMenu;