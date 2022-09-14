import React from 'react'
import beers from '../../assets/beers.png'
import randomBeer from '../../assets/random-beer.png'

import { Link } from 'react-router-dom'

function HomaPage() {
  return (
    <>
      <div className="row d-flex my-5">
        <div className="card col">
          <img src={beers} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">All Beers</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus laudantium voluptatem quisquam quibusdam sed accusantium reprehenderit voluptate. Recusandae quas sapiente ut? Porro iste a, amet et odit minima vero voluptatibus!</p>
            <Link to="/beers" className="btn btn-primary">All Beers</Link>
          </div>
        </div>
      </div>
      <div className="row d-flex my-5">
        <div className="card col">
          <img src={randomBeer} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Random Beer</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus laudantium voluptatem quisquam quibusdam sed accusantium reprehenderit voluptate. Recusandae quas sapiente ut? Porro iste a, amet et odit minima vero voluptatibus!</p>
            <Link to="/random-beer" className="btn btn-primary">Random Beer</Link>
          </div>
        </div>
      </div>
      <div className="row d-flex my-5">
        <div className="card col">
          <img src={beers} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">New Beers</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus laudantium voluptatem quisquam quibusdam sed accusantium reprehenderit voluptate. Recusandae quas sapiente ut? Porro iste a, amet et odit minima vero voluptatibus!</p>
            <Link to="/new-beer" className="btn btn-primary">New Beers</Link>
          </div>
        </div>
      </div>
    </>

  )
}

export default HomaPage