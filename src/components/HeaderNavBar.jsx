import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class HeaderNavBar extends React.Component {
  state = {
    menu: false,
  };

  toggleMenu = () => {
    this.setState({ menu: !this.state.menu });
  };

  render({ urls } = this.props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <FontAwesome name="home" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse  ${this.state.menu && 'show'}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            {urls.map((url, index) => (
              <NavLink className="nav-link" key={index} to={url.target}>
                {url.name}
              </NavLink>
            ))}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default HeaderNavBar;
