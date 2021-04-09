import React, {Component} from 'react';
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
        const {randomBeer} = this.state

    return (

      <div className="RandomBeers">
        <Header />
        <h1> Random Beer</h1>

        <div className="card" style={{ width: "10rem" }}>
          <img src={randomBeer.image_url} className="card-img-top" alt={randomBeer.name} />
          <div className="card-body">
            <div className="">
              <h2 className="card-title">{randomBeer.name}</h2>
            </div>
            <div className="">
              <h5 className="card-title">{randomBeer.tagline}</h5>
              <p className="card-text">{randomBeer.first_brewed}</p>
            </div>
            <div className="">
              <p>{randomBeer.description}</p>
              <p>{randomBeer.contribuited_by}</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}


export default RandomBeers