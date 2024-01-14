import logo from '../logo.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <Link className='links' to='/'>
            Home
          </Link>
          <Link className='links' to='about'>
            About
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
