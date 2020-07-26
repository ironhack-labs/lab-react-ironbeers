import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <FontAwesomeIcon className="icon" icon={faHome} />
        </Link>
      </header>
    );
  }
}

export default Header;
