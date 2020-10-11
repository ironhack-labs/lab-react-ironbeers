import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-card flex col">
          <img src="./images/allbeers.jpg" alt="all beers" className="home-img" />
          <Link to="/beers" className="home-link">All Beers</Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
            augue scelerisque, rutrum purus at, pharetra ipsum. Integer eget
            lobortis urna. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Nulla eleifend enim eu
            molestie iaculis. Nam sit amet varius eros, sit amet dapibus libero.
            In.
          </p>
        </div>
        <div className="home-card flex col">
          <img src="./images/onebeer.jpg" alt="all beers" className="home-img"  />
          <Link to="/random-beer" className="home-link">Random Beer</Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
            augue scelerisque, rutrum purus at, pharetra ipsum. Integer eget
            lobortis urna. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Nulla eleifend enim eu
            molestie iaculis. Nam sit amet varius eros, sit amet dapibus libero.
            In.
          </p>
        </div>
        <div className="home-card flex col">
          <img src="./images/newbeer.jpg" alt="all beers" className="home-img"  />
          <Link to="/new-beer" className="home-link">New Beer</Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
            augue scelerisque, rutrum purus at, pharetra ipsum. Integer eget
            lobortis urna. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Nulla eleifend enim eu
            molestie iaculis. Nam sit amet varius eros, sit amet dapibus libero.
            In.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
