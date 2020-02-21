import React, { Component } from 'react';
import axios from 'axios';

class BeerDetails extends Component {

  state = {
    beer : null
  }

  componentDidMount() {
    let baseURL = "https://ih-beers-api2.herokuapp.com/beers/"
    let endPoint = (this.props.location.pathname === "/random") ?
                      'random' :
                      `${this.props.match.params.id}`;

    axios.get(baseURL + endPoint)
    .then((results) => {
      this.setState({beer : results.data })
    }).catch(err => console.log("Error : ", err))
  }

  render() {
    const {beer} = this.state;
    return (
      <div className="page">

        {!!beer ?
        <div className="marginContainer beerDetails ">

          <div className="beerDetailsImage">
          <img src={beer.image_url} alt={beer.name} />
          </div>

          <div className="flexAppart">
            <span>{beer.name}</span>
            <span className="altColor">{beer.attenuation_level}</span>
          </div>

          <div className="flexAppart">
            <span className="altColor">{beer.tagline}</span>
            <span>{beer.first_brewed}</span>
          </div>

          <p>{beer.description}</p>

          <p className="altColor">{beer.contributed_by}</p>

        </div>

        : <div className="marginContainer"><p>Fetching beer ...</p></div>}

      </div>
    )
  }

}

export default BeerDetails;
