import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

function Navbar() {
  const location = useLocation();

  return (
    <Link to="/" className='link'>
      <div className="navBar">
        {location.pathname !== '/' && <HomeOutlined />}
      </div>
    </Link>
  );
}

export default Navbar;
