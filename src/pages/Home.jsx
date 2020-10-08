import React from 'react';
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <div>
      <div>
        <Link className="link" to="/beers">
          All Beers
        </Link>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi iste
          recusandae doloremque corporis doloribus quo. Mollitia qui, nam ex
          blanditiis in inventore, corporis deleniti vitae, minus corrupti
          dolorem accusantium sequi!
        </p>
      </div>
      <div>
        <Link className="link" to="/new-beer">
          New Beers
        </Link>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi iste
          recusandae doloremque corporis doloribus quo. Mollitia qui, nam ex
          blanditiis in inventore, corporis deleniti vitae, minus corrupti
          dolorem accusantium sequi!
        </p>
      </div>
      <div>
        <Link className="link" to="/random-beer">
          Random Beers
        </Link>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi iste
          recusandae doloremque corporis doloribus quo. Mollitia qui, nam ex
          blanditiis in inventore, corporis deleniti vitae, minus corrupti
          dolorem accusantium sequi!
        </p>
      </div>
    </div>
  );
};

export default home;
