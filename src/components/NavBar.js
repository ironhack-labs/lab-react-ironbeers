import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <Link to="/">
          <img
            src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
            alt="Home"
          />
        </Link>
      </div>
    );
  }
}
export default NavBar;
