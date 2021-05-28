import React from "react";
import { Link } from "react-router-dom";
import beersPic from './../assets/beers.png';
import newBeerPic from './../assets/new-beer.png';
import randomBeerPic from './../assets/random-beer.png';


const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center">

      <div className="card" style={{width: "70%"}}>
        <img className="card-img-top" src={beersPic} alt="Beers" />
        <div className="card-body">
          <h5 className="card-title">All Beers</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ultricies ante, eget commodo dui porta ut. Sed maximus, est sed mollis mattis, risus magna tristique leo, et imperdiet mauris massa ac dolor. Vivamus urna nibh, porta a ullamcorper sit amet, lobortis eget tellus. Mauris pulvinar ac enim in congue. Aliquam convallis purus vel justo ultrices, a blandit nulla porttitor. Praesent sed lectus ut mauris tincidunt finibus. Curabitur sollicitudin libero sem, quis porta tellus vulputate ut. Praesent pellentesque tempus sapien.</p>
          <Link to="/beers" className="btn btn-primary">View all the beers</Link>
        </div>
      </div>

      <div className="card" style={{width: "70%"}}>
        <img className="card-img-top" src={randomBeerPic} alt="Random Beer" />
        <div className="card-body">
          <h5 className="card-title">Random Beer</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ultricies ante, eget commodo dui porta ut. Sed maximus, est sed mollis mattis, risus magna tristique leo, et imperdiet mauris massa ac dolor. Vivamus urna nibh, porta a ullamcorper sit amet, lobortis eget tellus. Mauris pulvinar ac enim in congue. Aliquam convallis purus vel justo ultrices, a blandit nulla porttitor. Praesent sed lectus ut mauris tincidunt finibus. Curabitur sollicitudin libero sem, quis porta tellus vulputate ut. Praesent pellentesque tempus sapien.</p>
          <Link to="/random-beer" className="btn btn-primary">View a random beer</Link>
        </div>
      </div>

      <div className="card" style={{width: "70%"}}>
        <img className="card-img-top" src={newBeerPic} alt="New Beer" />
        <div className="card-body">
          <h5 className="card-title">New Beer</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ultricies ante, eget commodo dui porta ut. Sed maximus, est sed mollis mattis, risus magna tristique leo, et imperdiet mauris massa ac dolor. Vivamus urna nibh, porta a ullamcorper sit amet, lobortis eget tellus. Mauris pulvinar ac enim in congue. Aliquam convallis purus vel justo ultrices, a blandit nulla porttitor. Praesent sed lectus ut mauris tincidunt finibus. Curabitur sollicitudin libero sem, quis porta tellus vulputate ut. Praesent pellentesque tempus sapien.</p>
          <Link to="/new-beer" className="btn btn-primary">Add a new beer</Link>
        </div>
      </div>

    </div>
  );
};

export default Home;

