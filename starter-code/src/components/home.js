import React from 'react';
import { Route, Redirect} from 'react-router';
import { Link } from 'react-router-dom';



const home = () =>{
  return(
  <div className="card" width="200">
  <div className="card-body">
    <h5 className="card-title">Beers</h5>
    <p className="card-text">Click in the button Bellow and choose a beer in the men</p>
    <a href="#" className="btn btn-primary"><Link to="/beers">Beers</Link></a>
  </div>
  </div>

    
    )
}

export default home;
