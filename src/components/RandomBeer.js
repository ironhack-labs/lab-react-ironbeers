import React, { Component } from 'react'
import Axios from 'axios';

export default class RandomBeer extends Component {

state = {
    randomBeer: {}, 
}



componentDidMount() {
    
    Axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    .then(
      (response) => {
        console.log('response.data is: ', response.data);

        this.setState({
            randomBeer: response.data,
        });
      }
    );
  }





    render() {
    const {
      image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
      description,
      contributed_by,
    } = this.state.randomBeer;

    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <div className="card-body">
          <img src= {image_url} style={{height: "200px", textalign: "center"}} alt="beerpic"/>
            <h3 className="card-title">{name}</h3>
            <h4 className="card-subtitle mb-2 text-muted">{tagline}</h4>
            <aside>
                <p>{first_brewed}</p>
                <p>{attenuation_level}</p>
            </aside>
            <p className="card-text">
              {description}
            </p>
            <p className="contributed-by">{contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
}
