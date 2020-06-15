import React from 'react';
import { NavLink } from 'react-router-dom';

function Beers(props) {
  return (
    <div>
      {/* using template literals
      <img src={`${process.env.PUBLIC_URL}/images/beers.png`} alt="beers" /> */}
      <header>
        <a href="/">
          <img
            src={process.env.PUBLIC_URL + '/images/homeIcon.png'}
            alt="home" width="5%"
          />
        </a>
      </header>
      {props.beers.map((beers, i) => {
        return (
          <div key={i}>
            <img src={beers.image_url} alt="" />
            <h2> {beers.name}</h2>
            <h3> {beers.tagline}</h3>
            <p>Created by: {beers.contributed_by}</p>
            <NavLink to="/beers/:beersId">Beer Detail</NavLink>
          </div>
        );
      })}
    </div>
  );
}
export default Beers;
