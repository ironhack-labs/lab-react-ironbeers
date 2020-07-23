import React, { Component } from 'react';
import '../styles/beers.css';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="home_item">
          <Link  className="link_home" to="/beers">
            <img src="./tapbeer1.jpg" alt="all beers" className="img_home" />
            <h2>All Beers</h2>
          
          <div>
            Cras orci nunc, luctus non tristique nec, dignissim non justo.
            Pellentesque eget ante leo. Sed gravida, nunc sed placerat viverra,
            magna nulla varius nunc, nec posuere libero metus quis nunc.
          </div>
          </Link>
        </div>
        <div className="home_item">
          <Link className="link_home" to="/random-beer">
            <img src="./tapbeer2.jpg" alt="all beers" className="img_home" />
            <h2>Random Beer</h2>
            
            <div>
              Cras orci nunc, luctus non tristique nec, dignissim non justo.
              Pellentesque eget ante leo. Sed gravida, nunc sed placerat
              viverra, magna nulla varius nunc, nec posuere libero metus quis
              nunc. 
            </div>
            </Link>
          
        </div>
        <div className="home_item">
          <Link className="link_home" to="/new-beer">
            <img src="./beer3.jpg" alt="all beers" className="img_home" />
            <h2>New Beer</h2>
            
            <div>
              Cras orci nunc, luctus non tristique nec, dignissim non justo.
              Pellentesque eget ante leo. Sed gravida, nunc sed placerat
              viverra, magna nulla varius nunc, nec posuere libero metus quis
              nunc. 
            </div>
            </Link>
        </div>
      </div>
    );
  }
}

export default Home;
