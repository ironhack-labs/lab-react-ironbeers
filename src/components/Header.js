import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <h2 className="home">
            <span role="img" aria-label="home_image">
              &#127867;
            </span>
          </h2>
        </Link>
      </div>
    );
  }
}

export default Header;
