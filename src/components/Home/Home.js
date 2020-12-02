import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <h1>IRONBEERS</h1>
        <img
          src="./images/allbeers.jpg"
          alt="allbeers"
          width="1500"
          height="500"
        ></img>
        <Link to="/beers">
          <h3>All Beers</h3>
        </Link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in
        laborum sint vero doloribus eius omnis autem dolores, quibusdam debitis
        expedita vel adipisci dolore recusandae hic quam nostrum optio aperiam!
        <img
          src="./images/randombeer.jpg"
          alt="randombeer"
          width="1500"
          height="500"
        ></img>
        <Link to="/random-beer">
          <h3>Random Beer</h3>
        </Link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam soluta
        commodi ipsa aut fugiat ipsam optio rem, saepe reprehenderit aspernatur,
        deleniti a autem eum nam minus quasi nihil doloremque natus?
        <img
          src="./images/newbeer.jpg"
          alt="newbeer"
          width="1500"
          height="500"
        ></img>
        <Link to="/new-beer"><h3>New Beer</h3></Link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        aliquid iure quaerat cupiditate qui ad beatae maiores impedit
        repudiandae perspiciatis voluptatibus quidem ullam aliquam vitae a,
        mollitia culpa quisquam ratione.
      </div>
    </div>
  );
};

export default Home;

