import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Link to="/beers">
          {" "}
          <div>
            <img style={{ width: "100vw" }} src="/images/beers.png" alt="" />
            <h1>All Beers</h1>
            <p>
              vitae nam excepturi minima hic necessitatibus tenetur ipsa dolorem
              omnis magnam dignissimos assumenda!
            </p>
          </div>{" "}
        </Link>
        <Link to="/random-beer">
          <div>
            <img
              style={{ width: "100vw" }}
              src="/images/random-beer.png"
              alt=""
            />
            <h1>Random Beer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae odit voluptatibus
            </p>
          </div>
        </Link>
        <Link to="/new-beer">
          <div>
            <img style={{ width: "100vw" }} src="/images/new-beer.png" alt="" />
            <h1>New Beer</h1>
            <p>
              Exercitationem ad et ratione mollitia doloribus dolore eveniet
              sed, laborum quae inventore
            </p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Home;
