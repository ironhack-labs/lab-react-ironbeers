import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';

class ShowInfoBeer extends Component{

  showInfoBeer(){
    const {beer} = this.props;
    return <div>
            <div className="show-all-info-beer">
              <img className="img-of-beer" src={beer.image_url} alt={beer.name} />
              <div className="info-beer">
                <Link to={beer._id}><h3>{beer.name}</h3></Link>
                {beer.attenuation_level} of attenuation
                <h5>{beer.tagline}</h5>
                {beer.description} 
                <p>Created by: {beer.name}</p>
                <p>Contributed by: {beer.contributed_by}</p>
              </div>
            </div>
            <hr/>
          </div>
  }

  render(){
    const {beer} = this.props
    console.log(beer)
    return(
      <div>
        {this.showInfoBeer()}
      </div>
    )
  }
}

export default ShowInfoBeer