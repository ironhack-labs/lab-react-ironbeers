import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { BsFillHouseFill } from 'react-icons/bs';

const Header = () => {
  return (
    <div className={classes.container}>
      <Link to="/">
        <BsFillHouseFill className={classes.icon} />
      </Link>
    </div>
  );
};

export default Header;
