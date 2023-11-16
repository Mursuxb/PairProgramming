import { Link } from 'react-router-dom';
import Header from './Header';
import SocialLinks from './SocialLinks';

function Navigation() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Header />
                <ul className="nav-links">
                    <li>
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className='nav-link'>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='nav-link'>Contact</Link>
                    </li>
                    <li>
                        <Link to="/register" className='nav-link'> Register </Link>
                    </li>
                    <SocialLinks />
                </ul>
            </div>
        </nav >
    );
}

export default Navigation;
