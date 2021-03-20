import React from 'react';
import { Link } from 'react-router-dom';
import beers from './../assets/beers.png';
import newBeer from './../assets/newBeer.png';
import randomBeer from './../assets/randomBeer.png';

const Home = () => {
  return (
    <div>
      <div className="alignHomePage">
        <img src={beers} />
        <Link to="/beers">
          <h1>All Beers</h1>
        </Link>
        <p style={{ width: '50vw' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          nobis odit repellat, nihil distinctio nulla voluptates delectus
          repudiandae laborum laudantium dolorem, aperiam mollitia. Error quidem
          molestias, repellat voluptatum aut qui!
        </p>
      </div>
      <div className="alignHomePage">
        <img src={randomBeer} />
        <Link to="/random-beer" alt=" beer">
          <h1>Random Beer</h1>
        </Link>
        <p style={{ width: '50vw' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          repudiandae incidunt amet placeat quos doloremque ut rem natus,
          assumenda cum dolorem rerum perferendis corporis, aut animi, nobis
          molestias nulla minus!
        </p>
      </div>

      <div className="alignHomePage">
        <img src={newBeer} />
        <Link to={'/new-beer'}>
          <h1>New Beer</h1>
        </Link>
        <p style={{ width: '50vw' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          eos nisi asperiores distinctio dolor itaque dolorem nulla amet
          provident in eveniet, laborum quae, earum blanditiis cumque ab rerum
          at! Esse.
        </p>
      </div>
    </div>
  );
};

export default Home;
