import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="d-flex justify-content-center mb-3">
      <Link to="/">
        <img
          style={{ width: '98vw', height: '10vh', objectFit: 'cover' }}
          src="https://res.cloudinary.com/dkuwzoiqf/image/upload/v1687559819/Header_s45vn0.png"
          alt="header image"
        />
      </Link>
    </div>
  );
};
