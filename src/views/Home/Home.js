import React from 'react';
import { Link } from 'react-router-dom'
import beer from '../../assets/beers.png'
import newBeer from '../../assets/new-beer.png'
import randomBeer from '../../assets/random-beer.png'

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col">
          <div className="card">
            <Link to="/beers"><img src={beer} className="card-img-top" alt="my beer" /></Link>
            <div className="card-body">
              <h2 className="card-title">All Beers</h2>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <Link to="/random-beer"><img src={randomBeer} className="card-img-top" alt="my beer" /></Link>
            <div className="card-body">
              <h2 className="card-title">Random Beer</h2>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <Link to="/new-beer"><img src={newBeer} className="card-img-top" alt="my beer" /></Link>
            <div className="card-body">
              <h2 className="card-title">New Beer</h2>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        
      </div> 
    </div>
  )
}

export default Home;