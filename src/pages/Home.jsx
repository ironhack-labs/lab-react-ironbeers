import React from 'react';
import { Link } from 'react-router-dom';


const Home = (props) => {
  return (
    <div>
      <h1>I am the home page !</h1>
      <img src="/images/image1.png" alt=""/>
      <Link className="link" to="/beers">
       <h2>
        Navigate to the beers page
       </h2>
      </Link>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rem eos inventore dicta quia repellendus voluptatibus provident quod nobis a unde temporibus voluptate, voluptas culpa incidunt aspernatur veritatis assumenda quaerat!</p>
      <img src="/images/image2.png" alt=""/>
      <Link className="link" to="/random-beer">
      <h2>
        Get a random beer
      </h2>
      </Link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis saepe esse praesentium voluptate recusandae sapiente, et, hic magni eos quis quod aliquam cumque quasi illo ipsa amet omnis. Dolore?</p>
      <img src="../images/image3.png" alt=""/>
      <Link className="link" to="/new-beer">
      <h2>
        Get a new beer
      </h2>
      </Link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi id consectetur totam pariatur, animi quia quo cumque est, facere quod enim debitis quibusdam nihil vitae corrupti nulla assumenda cum!</p>
    </div>
  );
};

export default Home;
