import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <div>
        <img src="" alt="" />
        <Link className="link" to="/beers">
          <h2>All beers</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          nostrum, quam porro incidunt, sapiente excepturi non nemo repellat
          labore, iure assumenda? Nobis a magni cupiditate quidem vel temporibus
          animi ipsum.
        </p>
      </div>

      <div>
        <img src="" alt="" />
        <Link className="link" to="/random-beer">
          <h2>Random Beer</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          nostrum, quam porro incidunt, sapiente excepturi non nemo repellat
          labore, iure assumenda? Nobis a magni cupiditate quidem vel temporibus
          animi ipsum.
        </p>
      </div>

      <div>
        <img src="" alt="" />
        <Link className="link" to="/new-beer">
          <h2>New Beer</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          nostrum, quam porro incidunt, sapiente excepturi non nemo repellat
          labore, iure assumenda? Nobis a magni cupiditate quidem vel temporibus
          animi ipsum.
        </p>
      </div>
    </div>
  );
};

export default Home;
