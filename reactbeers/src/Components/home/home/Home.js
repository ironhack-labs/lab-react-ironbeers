import React from 'react';
import '../../../App.css';
import { Link } from "react-router-dom";
function AllBeers() {
  return (
    <header className="center-align top">
      <Link activeclassname="active" exact to={`/`}><i className="material-icons home">home</i></Link>
      </header>
  );
}

export default AllBeers;
