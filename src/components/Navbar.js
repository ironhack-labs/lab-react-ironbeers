import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const homeImg =
    'https://img.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF';
  return (
    <div className="navbar">
      <Link to={'/'}>
        <img src={homeImg} alt="logo" className="img"></img>
      </Link>
    </div>
  );
}
export default Navbar;
