import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div>
        <div>
          <img className="img" src="https://cimg.co/w/articles/0/5db/f686faf6ad.jpg" alt="" />
          <Link to="/beers">
            <h1>All Beers</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            et? Magnam, incidunt. Expedita, repellat eveniet.
          </p>
        </div>
        <div>
          <img className="img" src="https://img.riedel.com/mgnl/w_420,q_80/dam/image-archive/1280x960px-standard-blog/education/Spiegelau-glasses-on-Bar-1280x960.jpg" alt="" />
          <Link to="/random-beer">
            <h1>Random Beer</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            et? Magnam, incidunt. Expedita, repellat eveniet.
          </p>
        </div>
        <div>
          <img className="img" src="https://www.francaisdublin.com/wp-content/uploads/2014/06/biere.jpg" alt="" />
          <Link to="/new-beer">
            <h1>New Beer</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            et? Magnam, incidunt. Expedita, repellat eveniet.
          </p>
        </div>
      </div>
    );
  }
}

export default Main;
