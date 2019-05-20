import React, { Component } from 'react';
import beers from '../beers.png';
import randomBeer from '../random-beer.png';
import newBeer from '../new-beer.png';

import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={beers} alt="beers" />
          <h1>
            <Link to="./beers">All Beers</Link>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Morbi gravida orci eget tellus bibendum, id molestie est auctor. <br />
            Morbi at nibh quam. Vivamus mollis nibh id laoreet mattis. Nam <br />
            odio purus, eleifend at nulla a, mattis consectetur neque. Sed sit <br />
            amet egestas ligula. Nullam cursus massa sit amet consectetur malesuada. <br />
            Mauris est tortor, elementum quis imperdiet vitae, mattis vel mi. Class <br />
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos <br />
            himenaeos. Aenean varius ultricies risus sit amet luctus.
          </p>
        </div>
        <div>
          <img src={randomBeer} alt="random beer" />
          <h1>
            <Link to="./random-beer">Random Beer</Link>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Morbi gravida orci eget tellus bibendum, id molestie est auctor. <br />
            Morbi at nibh quam. Vivamus mollis nibh id laoreet mattis. Nam <br />
            odio purus, eleifend at nulla a, mattis consectetur neque. Sed sit <br />
            amet egestas ligula. Nullam cursus massa sit amet consectetur malesuada. <br />
            Mauris est tortor, elementum quis imperdiet vitae, mattis vel mi. Class <br />
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos <br />
            himenaeos. Aenean varius ultricies risus sit amet luctus.
          </p>
        </div>
        <div>
          <img src={newBeer} alt="new beer" />
          <h1>
            <Link to="./new-beer">New Beer</Link>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Morbi gravida orci eget tellus bibendum, id molestie est auctor. <br />
            Morbi at nibh quam. Vivamus mollis nibh id laoreet mattis. Nam <br />
            odio purus, eleifend at nulla a, mattis consectetur neque. Sed sit <br />
            amet egestas ligula. Nullam cursus massa sit amet consectetur malesuada. <br />
            Mauris est tortor, elementum quis imperdiet vitae, mattis vel mi. Class <br />
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos <br />
            himenaeos. Aenean varius ultricies risus sit amet luctus.
          </p>
        </div>
      </div>
    );
  }
}
