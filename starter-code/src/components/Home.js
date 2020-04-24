import React, { Component } from 'react';
import HomeContent from './HomeContent'
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    const lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus magna a enim volutpat ullamcorper. Cras eleifend felis et tincidunt fermentum. Vestibulum laoreet tristique ex, et mattis diam feugiat sed. Fusce eget porta odio. Cras feugiat vehicula justo, vitae accumsan ante accumsan sit amet. Integer iaculis ut massa non porttitor.";
    return (
      <div>
        <Link to="beers">
          <HomeContent imgUrl="/images/beers.png" title="beers" text={lipsum} />
        </Link>
        <Link to="random-beer">
          <HomeContent imgUrl="/images/random-beer.png" title="random beer" text={lipsum} /> 
        </Link>
        <Link to="new-beer">
          <HomeContent imgUrl="/images/new-beer.png" title="new beer" text={lipsum} />
        </Link>
      </div>
    );
  }
}

export default Home;