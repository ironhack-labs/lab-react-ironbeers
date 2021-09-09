import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const chiquito = 'Lorem fistrum mamaar condemor hasta luego Lucas. La caidita caballo blanco caballo negroorl por la gloria de mi madre no puedor de la pradera la caidita fistro no te digo trigo por no llamarte Rodrigor me cago en tus muelas por la gloria de mi madre diodeno.'

  return(
    <div className='Home'>
        <div className="col-sm-6">
          <Link to='/beers' className="card">
            <img src='../../beers.png' alt='Beers' />
            <div className="card-body">
              <h4 className="card-title">All Beers</h4>
              <p className="card-text">{chiquito}</p>
            </div>
          </Link>
        </div>
        <div className="col-sm-6">
          <Link to='random-beer' className="card">
          <img src='../../random-beer.png' alt='Beers' />
            <div className="card-body">
              <h4 className="card-title">Random Beer</h4>
              <p className="card-text">{chiquito}</p>
            </div>
          </Link>
        </div>
        <div className="col-sm-6">
          <Link to='new-beer' className="card">
            <img src='../../new-beer.png' alt='Beers' />
            <div className="card-body">
              <h4 className="card-title">New Beer</h4>
              <p className="card-text">{chiquito}</p>
            </div>
          </Link>
        </div>
    </div>
  )
}