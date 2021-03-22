import React from 'react';
import BeersImg from './../assets/beers.png';
import RandomBeerImg from './../assets/random-beer.png';
import NewBeerImg from './../assets/new-beer.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <NavLink exact to="/beers" className="nav-link">
          <img src={BeersImg} alt="bar" />
        </NavLink>
        <h2 style={{ textAlign: 'left' }}>All Beers</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          reiciendis pariatur porro iusto consectetur optio similique excepturi
          harum tempore culpa. Similique eum quia provident aut recusandae
          praesentium corporis. Id, eveniet?
        </p>
      </div>
      <div>
        <NavLink exact to="/random-beer" className="nav-link">
          <img src={RandomBeerImg} alt="random-beer" />
        </NavLink>
        <h2 style={{ textAlign: 'left' }}>Random Beer</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          reiciendis pariatur porro iusto consectetur optio similique excepturi
          harum tempore culpa. Similique eum quia provident aut recusandae
          praesentium corporis. Id, eveniet?
        </p>
      </div>
      <div>
        <NavLink exact to="/new-beer" className="nav-link">
          <img src={NewBeerImg} alt="new-beer" />
        </NavLink>
        <h2 style={{ textAlign: 'left' }}>Random Beer</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          reiciendis pariatur porro iusto consectetur optio similique excepturi
          harum tempore culpa. Similique eum quia provident aut recusandae
          praesentium corporis. Id, eveniet?
        </p>
      </div>
    </div>
  );
};

export default Home;
