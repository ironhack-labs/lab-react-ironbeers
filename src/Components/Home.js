import React from 'react';
import { Link } from 'react-router-dom';
import allPic from '../img/allBeers.jpg';
import newBeer from '../img/newBeer.jpg';
import randomBeer from '../img/randomBeer.jpg';



function Home() {
  return (
<div className="container">
<div className="row">
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src={allPic} alt="" />
      <div className="caption">
        <h3>All Beers</h3>
        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. 
        Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh 
        ultricies vehicula ut id elit.</p>
        <p><Link to='/beers' className="btn btn-primary" role="button">Learn More</Link></p>
      </div>
    </div>
  </div>

  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src={newBeer} alt="" />
      <div className="caption">
        <h3>New Beer</h3>
        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. 
        Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh 
        ultricies vehicula ut id elit.</p>
        <p><Link to='/new-beer' className="btn btn-primary" role="button">Learn More</Link></p>
      </div>
    </div>
  </div>
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src={randomBeer} alt="" />
      <div className="caption">
        <h3>Random Beer</h3>
        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. 
        Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh 
        ultricies vehicula ut id elit.</p>
        <p><Link to='/random-beer' className="btn btn-primary" role="button">Learn More</Link></p>
      </div>
    </div>
  </div>
</div>
</div>

  );
}

export default Home;