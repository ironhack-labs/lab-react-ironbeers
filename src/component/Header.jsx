import { Link } from 'react-router-dom';
const homeImg =
  'https://freepikpsd.com/file/2019/10/217-2171720_icon-white-house-home-icon-white-png.png';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={homeImg} alt="home icon" />
      </Link>
    </div>
  );
}

export default Header;
