import React, { Component } from 'react';
import '../RandomBeers/RandomBeers.css';
import Header from '../Header/Header';
import Axios from 'axios';


class RandomBeers extends Component {

  state = {
    randomBeer: {}
  }

  componentDidMount() {
    Axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(beer =>
        this.setState({ randomBeer: beer.data })
      )
      .catch(e => console.log(e))
  }

  render() {
    const { randomBeer } = this.state

    return (

      <div className="RandomBeers">

        <Header />
        <h1> Random Beer</h1>
        <div className="row px-5 py-5 flex-column d-flex align-items-center">
          <div className="col">
            <div className="card justify-content-center"  >
              <div className="col d-flex" style={{ width: "150px" }}>
                <img src={randomBeer.image_url} className="card-img-top " alt={randomBeer.name} />
              </div>
              <div className="col">
                <h2 className="card-title">{randomBeer.name}</h2>
                <h3 className="">{randomBeer.attenuation}</h3>
              </div>
              <div className="col">
                <h5 className="card-title">{randomBeer.tagline}</h5>
                <p className="card-text"><strong>{randomBeer.first_brewed}</strong></p>
              </div>
              <div className="col">
                <p>{randomBeer.description}</p>
                <p>{randomBeer.contributed_by}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}


export default RandomBeers