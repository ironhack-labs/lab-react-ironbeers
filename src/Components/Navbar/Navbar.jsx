import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar-center bg-sky-600">
        <Link to={'/'} className="btn btn-ghost normal-case text-xl text-white">
          <img
            className="house-icon invert"
            src="https://icon-library.com/images/transparent-house-icon/transparent-house-icon-13.jpg"
            alt="house icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
