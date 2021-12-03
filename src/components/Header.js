import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

const Header = () => {
  return (
    <div>
      <Link to="/"><button type="button"><i className="fas fa-home"></i></button></Link>
      <Routes>
        <Route exact path="/" render={() => <Home />} />
      </Routes>
      
    </div>
  );
};

export default Header;