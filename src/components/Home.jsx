import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Home.css';

const Home = () => {
  return (
    <div className="Home">
      <Link className="beers" to="/beers">
        <div className="image"></div>
        <h2>All beers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          quidem harum laudantium commodi voluptates, ducimus ipsum possimus
          quibusdam sint est dolorum perferendis deserunt velit corporis quod
          placeat nam vero iure.
        </p>
      </Link>
      <Link className="random" to="/random-beer">
        <div className="image"></div>
        <h2>Random beer</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          delectus veniam incidunt odio voluptatum esse reiciendis, in ut optio
          beatae libero. Officiis velit maxime soluta, sint magni explicabo
          quibusdam quos?
        </p>
      </Link>
      <Link className="new" to="/new-beer">
        <div className="image"></div>
        <h2>New beer</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          dolor officia facilis ipsa deleniti neque placeat et, quod corporis.
          Qui velit eum mollitia facere vero explicabo unde eveniet blanditiis
          quae.
        </p>
      </Link>
    </div>
  );
};

export default Home;
