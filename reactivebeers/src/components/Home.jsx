import React from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div>
      <h3>This is Home</h3>
      <Link to="/beers">
        <div>
          <img src="../../images/allbeers.png" />
          <h3>All Beers</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            excepturi corporis esse, quidem explicabo assumenda iure
            consequuntur iusto beatae dolor vero, nesciunt officiis voluptates
            aliquid similique, ipsum voluptatum asperiores commodi!
          </p>
        </div>
      </Link>
      <Link to="/randombeer">
        <div>
          <img src="../../images/RandomBeer.png" />
          <h3>Random Beer</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            excepturi corporis esse, quidem explicabo assumenda iure
            consequuntur iusto beatae dolor vero, nesciunt officiis voluptates
            aliquid similique, ipsum voluptatum asperiores commodi!
          </p>
        </div>
      </Link>
      <Link to="/newbeer">
        <div>
          <img src="../../images/NewBeer.png" />
          <h3>New Beer</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            excepturi corporis esse, quidem explicabo assumenda iure
            consequuntur iusto beatae dolor vero, nesciunt officiis voluptates
            aliquid similique, ipsum voluptatum asperiores commodi!
          </p>
        </div>
      </Link>
    </div>
  );
};

export default home;
