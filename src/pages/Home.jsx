import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div class="home-link">
        <img src="https://p2d7x8x2.stackpathcdn.com/wordpress/wp-content/uploads/2020/03/iStock-1040303026.jpg" alt="all beers" />
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

      <div class="home-link">
        <img src="https://shanghai-paper.com/wp-content/uploads/2020/06/Beer-in-China.jpg" alt="random beer" />
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

      <div class="home-link">
        <img src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU4NTE1Nzg2MDcwMTA3Mzk0/beer-oldest.jpg" alt="create beer" />
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
