import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <Fragment>
      <Link className="card" style = {{width: "50%"}} to='/beers'>
        <img className="card-img-top" src="images/beers.png" alt="beers"/>
        <div className="card-body">
          <h5 className="card-title text-secondary text-left">All beers</h5>
          <p className="card-text text-secondary text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu felis, posuere ut felis blandit, aliquet consectetur eros.</p>   
        </div>
      </Link>
      <Link className="card" style = {{width: "50%"}} to='beers/random-beer'>
        <img className="card-img-top" src="images/random-beer.png" alt="random-beer"/>
        <div className="card-body">
          <h5 className="card-title text-secondary text-left">Random Beer</h5>
          <p className="card-text text-secondary text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu felis, posuere ut felis blandit, aliquet consectetur eros.</p>   
        </div>
      </Link>
      <Link className="card" style = {{width: "50%"}} to='beers/new-beer'>
        <img className="card-img-top" src="images/new-beer.png" alt="new-beet"/>
        <div className="card-body">
          <h5 className="card-title text-secondary text-left">New Beer</h5>
          <p className="card-text text-secondary text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu felis, posuere ut felis blandit, aliquet consectetur eros.</p>   
        </div>
      </Link>
   </Fragment>
 )

}