import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import FormSearch from './FormSearch';

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
        <NavLink
          className="navbar-brand"
          activeClassName="disabled text-muted"
          exact
          to="/"
        >
          <FontAwesome name="beer" size="2x" onClick={this.handleHideMenu} />
        </NavLink>
        <button
          className={`navbar-toggler ${this.state.menu ? 'active' : ''}`}
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
          <FormSearch />
        </div>
      </nav>
    );
  }
}

export default HeaderNavBar;
