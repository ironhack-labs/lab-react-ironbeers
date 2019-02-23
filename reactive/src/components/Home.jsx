import React from "react";

import { Link } from "react-router-dom";

const home = () => {
  return (
    <div>
      <h3>Home</h3>
      <Link to="/all">
        <img />
        <h3>All Beers</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          architecto sunt odit veritatis soluta corporis quaerat ratione quae id
          perspiciatis assumenda explicabo possimus commodi, voluptas similique
          amet quasi adipisci! Assumenda?
        </p>
      </Link>
      <Link to="/random">
        <img />
        <h3>Random Beer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          architecto sunt odit veritatis soluta corporis quaerat ratione quae id
          perspiciatis assumenda explicabo possimus commodi, voluptas similique
          amet quasi adipisci! Assumenda?
        </p>
      </Link>

      <Link to="/new">
        <img />
        <h3>New Beer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          architecto sunt odit veritatis soluta corporis quaerat ratione quae id
          perspiciatis assumenda explicabo possimus commodi, voluptas similique
          amet quasi adipisci! Assumenda?
        </p>
      </Link>
    
   
    </div>
  );
};

export default home;

