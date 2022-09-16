import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function Header(props) {
  return (
    <Link to='/' className='navbar'>
      <FaHome/>
    </Link>
  );
}

export default Header;