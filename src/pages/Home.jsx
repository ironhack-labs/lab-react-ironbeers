import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="Home">
      <NavLink to="/beers">
        <div className="menu-box">
          <img src="./img/beers2.jpg" alt="beers img" className="beers-img" />
          <h2>All beers</h2>
          <p className="text-article">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nemo
            odit, saepe accusamus fugit eaque eligendi doloremque, recusandae
            deleniti iure officia, ipsam quisquam. In a soluta, animi ipsa
            dolorum harum?
          </p>
        </div>
      </NavLink>
      <NavLink to="/random">
        <div className="menu-box">
          <img src="./img/beers3.jpg" alt="beers img" className="beers-img" />
          <h2>Random Beer</h2>
          <p className="text-article">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nemo
            odit, saepe accusamus fugit eaque eligendi doloremque, recusandae
            deleniti iure officia, ipsam quisquam. In a soluta, animi ipsa
            dolorum harum?
          </p>
        </div>
      </NavLink>
      <NavLink to="/new">
        <div className="menu-box">
          <img src="./img/beers1.jpg" alt="beers img" className="beers-img" />
          <h2>Create New Beer</h2>
          <p className="text-article">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nemo
            odit, saepe accusamus fugit eaque eligendi doloremque, recusandae
            deleniti iure officia, ipsam quisquam. In a soluta, animi ipsa
            dolorum harum?
          </p>
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
