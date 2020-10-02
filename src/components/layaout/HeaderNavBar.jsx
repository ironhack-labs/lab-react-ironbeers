import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class HeaderNavBar extends React.Component {
  state = {
    menu: false,
  };

  handleToggleMenu = () => {
    this.setState({ menu: !this.state.menu });
  };
  handleHideMenu = () => {
    this.setState({ menu: false });
  };

  render({ urls } = this.props) {
    return (
      <nav className="navbar navbar-expand-lg bg-custom">
        <Link className="navbar-brand" to="/">
          <FontAwesome name="beer" size="2x" onClick={this.handleHideMenu} />
        </Link>
        <button
          className={`navbar-toggler${this.state.menu ? ' active' : ''}`}
          type="button"
          onClick={this.handleToggleMenu}
        >
          {this.state.menu ? (
            <FontAwesome name="times" />
          ) : (
            <FontAwesome name="bars" />
          )}
        </button>

        <div
          className={`collapse navbar-collapse  ${this.state.menu && 'show'}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            {urls.map((url, index) => (
              <li key={`${index}-${url.target}`}>
                <NavLink
                  className="nav-link"
                  to={url.target}
                  onClick={this.handleHideMenu}
                >
                  {url.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default HeaderNavBar;
