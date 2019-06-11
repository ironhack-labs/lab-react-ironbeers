import React from "react";
import { Link } from "react-router-dom";
import beers from "../images/beers.png";
import randombeer from "../images/randombeer.png";
import newbeer from "../images/newbeer.png";

class Home extends React.Component {
  render() {
    return (
      <nav className="nav-style">
        <ul className="imageDiv">
          <li>
            <Link to="/Beers">
              <img className="imageLink" src={beers} alt="beers" />
              <div className="descriptionLink">
                <h3>All Beers</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  quos velit optio iste dolore excepturi in fugiat porro
                  tenetur! Eius reiciendis libero voluptate placeat aliquid
                  provident vero, consequuntur modi maiores.
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/RandomBeer">
              <img className="imageLink" src={randombeer} alt="randombeer" />
              <div className="descriptionLink">
                <h3>Random Beer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  quos velit optio iste dolore excepturi in fugiat porro
                  tenetur! Eius reiciendis libero voluptate placeat aliquid
                  provident vero, consequuntur modi maiores.
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/NewBeer">
              <img className="imageLink" src={newbeer} alt="newbeer" />
              <div className="descriptionLink">
                <h3>New Beer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  quos velit optio iste dolore excepturi in fugiat porro
                  tenetur! Eius reiciendis libero voluptate placeat aliquid
                  provident vero, consequuntur modi maiores.
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Home;
