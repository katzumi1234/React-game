import Menu from '../Components/Menu/Menu';
import logo from '../assets/logo.svg';

const Homepage = () => {
    return (
        <div className="homepage d-flex flex-column justify-content-center align-items-center">
            <img className='logo' src={logo} alt='' />
            <Menu />
        </div>
    )
}

export default Homepage;