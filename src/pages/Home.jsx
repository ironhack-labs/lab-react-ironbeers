import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <NavLink to="/beers">
        <img
          src="https://images.lovindublin.com/uploads/images/uploads/2014/03/againstthegrain.jpg"
          alt="all beers"
        />
      </NavLink>
      <h2>
        <NavLink to="/beers">All Beers</NavLink>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla
        sollicitudin mauris in ultricies. Duis dignissim nisi dolor, et
        malesuada odio volutpat eu.
      </p>
      <NavLink to="/random">
        <img
          src="./images/Ipswich-Craft-Beer-Bar-and-Restaurant.jpg"
          alt="random beer"
        />
      </NavLink>
      <h2>
        <NavLink to="/random">Random Beer</NavLink>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla
        sollicitudin mauris in ultricies. Duis dignissim nisi dolor, et
        malesuada odio volutpat eu.
      </p>
      <NavLink to="/new">
        <img
          src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/115616637_2995067550547159_5282830850665317371_o.jpg?_nc_cat=104&_nc_sid=1cb0a9&_nc_ohc=tEIipgBmTEkAX_2xGkd&_nc_ht=scontent-cdg2-1.xx&oh=b8a31c1694d97ced04bda2db4669c10d&oe=5F40ABEA"
          alt="new beer"
        />
      </NavLink>
      <h2>
        <NavLink to="/new">New Beer</NavLink>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla
        sollicitudin mauris in ultricies. Duis dignissim nisi dolor, et
        malesuada odio volutpat eu.
      </p>
    </div>
  );
};

export default Home;
