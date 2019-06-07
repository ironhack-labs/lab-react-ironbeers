import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
      <div> 
        <div className="card mb-3">
          <img className="card-img-top" src="/img/beers.png" alt="All beers"/>
        <div className="card-body">
        <h5 className="card-title"><Link to={'/beers'}>All Beers</Link></h5>
          <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione at atque dicta cupiditate nihil placeat. Alias laborum nemo, beatae minima, fugit ipsam error sit consequuntur nesciunt voluptatem tenetur praesentium aut?</p>
        </div>
        </div>

        <div className="card mb-3">
          <img className="card-img-top" src="/img/new-beer.png" alt="New beer"/>
        <div className="card-body">
        <h5 className="card-title"><Link to={'/new-beer'}>New beer</Link></h5>
          <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione at atque dicta cupiditate nihil placeat. Alias laborum nemo, beatae minima, fugit ipsam error sit consequuntur nesciunt voluptatem tenetur praesentium aut?</p>
        </div>
        </div>

        <div className="card mb-3">
          <img className="card-img-top" src="/img/random-beer.png" alt="Random beer"/>
        <div className="card-body">
        <h5 className="card-title"><Link to={'/random'}>Random beer</Link></h5>
          <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione at atque dicta cupiditate nihil placeat. Alias laborum nemo, beatae minima, fugit ipsam error sit consequuntur nesciunt voluptatem tenetur praesentium aut?</p>
        </div>
        </div>
      </div>

      
    )
}

export default Home