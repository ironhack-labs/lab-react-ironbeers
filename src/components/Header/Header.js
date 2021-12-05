import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button } from 'antd';
import Home from '../Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div>
      <Link to="/">
        <Button type="primary" style={{ width: 30, height: 30, margin: 10 }}>
          <FontAwesomeIcon icon={faHome} />
        </Button>
      </Link>
      <Routes>
        <Route exact path="/" render={() => <Home />} />
      </Routes>
    </div>
  );
};

export default Header;

