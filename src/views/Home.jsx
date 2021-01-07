import React from 'react';
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
    <div>
        <Link to="/beers"><img src="/images/image2.jpg" alt=""/></Link>
      <h3>All beers</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil libero blanditiis nulla qui unde cumque aut explicabo aperiam laborum eligendi.</p>
    </div>
    <div>
        <Link to="/random-beer"><img src="/images/image3.jpeg" alt=""/></Link>
      <h3>Random beer</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil libero blanditiis nulla qui unde cumque aut explicabo aperiam laborum eligendi.</p>

    </div>
    <div>
        <Link to="/new-beer"><img src="/images/image4.jpg" alt=""/></Link>
      <h3>Create New beers</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil libero blanditiis nulla qui unde cumque aut explicabo aperiam laborum eligendi.</p>

    </div>

    </div>
  );
};

export default Home;
