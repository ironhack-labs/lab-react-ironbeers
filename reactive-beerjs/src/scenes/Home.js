import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
 return (
   <Fragment>
    <Link className="card" style = {{width: "100%"}} to='/beers'>
      <img className="card-img-top" src="img/beers.png" alt=""/>
      <div className="card-body">
        <h5 className="card-title text-secondary">All beers</h5>
        <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu felis, posuere ut felis blandit, aliquet consectetur eros.</p>   
      </div>
    </Link>
    <Link className="card" style = {{width: "100%"}} to='/random-beer'>
      <img className="card-img-top" src="img/random-beer.png" alt=""/>
      <div className="card-body">
        <h5 className="card-title text-secondary">Random Beer</h5>
        <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu felis, posuere ut felis blandit, aliquet consectetur eros.</p>   
      </div>
    </Link>
    <Link className="card" style = {{width: "100%"}} to='/new-beer'>
      <img className="card-img-top" src="img/new-beer.png" alt=""/>
      <div className="card-body">
        <h5 className="card-title text-secondary">New Beer</h5>
        <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu felis, posuere ut felis blandit, aliquet consectetur eros.</p>   
      </div>
    </Link>
   </Fragment>
 )
}

export default Home