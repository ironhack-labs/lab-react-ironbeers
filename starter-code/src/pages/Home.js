import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="container mt-5 pt-5">
      <div className="card-deck">
        <div className="card">
        <Link to="/beers">
          <img src="/images/beers.png" className="card-img-top img-fluid" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">All Beers</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores vero eligendi amet porro vel sapiente? Tempora ex dignissimos repellat beatae, cumque, impedit asperiores nam in, optio ipsam aperiam illo?</p>
          </div>
        </Link>
        </div>
        <div className="card">
        <Link to="/random-beer">
          <img src="/images/random-beer.png" className="card-img-top img-fluid" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Random Beer</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat maxime illum, libero at deleniti sit consequuntur doloremque? Aliquid doloremque voluptatibus quisquam eaque excepturi nostrum ducimus cum officiis impedit? Quos?</p>
          </div>
        </Link>
        </div>
        <div className="card">
        <Link to="/new-beer">
          <img src="/images/new-beer.png" className="card-img-top img-fluid" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">New Beer</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae rerum aperiam odit distinctio eaque molestiae a non tempora vero deleniti deserunt enim minus, et blanditiis aliquid exercitationem explicabo? Perspiciatis, numquam.</p>
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;