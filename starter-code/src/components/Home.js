import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className ="p-5">
      <ul className ="p-5">
        <li >
            <div>
          <img src="/images/beers.png" alt="" srcset="" />
          </div>
          <Link className="text-center" to="/beers">Beers List</Link>
          <p className ="text-center ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
            placeat odio reprehenderit dolorum ipsa quae, provident rem
            consectetur, consequuntur sint tenetur recusandae aliquam! Earum quo
            vel ipsam itaque, culpa suscipit?
          </p>
        </li>
        <li>
            <div>
        <img src="/images/new-beer.png" alt="" srcset="" />
        </div>
          <Link className="text-center" to="/new-beer">New Beer</Link>
          <p className ="text-center ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
            placeat odio reprehenderit dolorum ipsa quae, provident rem
            consectetur, consequuntur sint tenetur recusandae aliquam! Earum quo
            vel ipsam itaque, culpa suscipit?
          </p>
        </li>
        <li>
            <div>
        <img src="/images/random-beer.png" alt="" srcset="" />
        </div>
          <Link className="text-center" to="/random-beer" >Random Beer</Link>
          <p className ="text-center ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
            placeat odio reprehenderit dolorum ipsa quae, provident rem
            consectetur, consequuntur sint tenetur recusandae aliquam! Earum quo
            vel ipsam itaque, culpa suscipit?
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Home;
