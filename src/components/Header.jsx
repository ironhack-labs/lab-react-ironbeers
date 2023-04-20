import { Link } from 'react-router-dom';
import iconHome from '../assets/icon_home.png';

function Header() {
  return (
    <Link className='header-link' to={'/'}>
      <div className='header'>
        <img className='icon-home' src={iconHome} alt='home' />
      </div>
    </Link>
  );
}

export default Header;
