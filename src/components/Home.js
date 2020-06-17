import React from 'react';
import { NavLink } from 'react-router-dom';


function Home() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">

        <div className="card my-3" style={{"width": "18rem"}}>
          <a href="/beers">
            <img className="card-img-top" src={process.env.PUBLIC_URL + "/images/beers.png"} alt="Card image cap" />
          </a>
            <div className="card-body">
            <a href="/beers" style={{textDecoration:"none"}}>
              <h5 className="card-title">All Beers</h5>
            </a>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, corrupti.</p>
            </div>
        </div>

        <div className="card my-3" style={{"width": "18rem"}}>
          <a href="/random-beer">
            <img className="card-img-top" src={process.env.PUBLIC_URL + "/images/random-beer.png"} alt="Card image cap" />
          </a>
            <div className="card-body">
            <a href="/random-beer">
              <h5 className="card-title">Random Beer</h5>
            </a>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, corrupti.</p>
            </div>
        </div>

        <div className="card my-3" style={{"width": "18rem"}}>
          <a href="/new-beer">
            <img className="card-img-top" src={process.env.PUBLIC_URL + "/images/new-beer.png"} alt="Card image cap" />
          </a>
            <div className="card-body">
            <a href="/new-beer">
              <h5 className="card-title">New Beer</h5>
            </a>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, corrupti.</p>
            </div>
        </div>
      </div>
    );

}

export default Home;
