
import React, { Component } from 'react';
import NavBar from './NavBar';
import Axios from 'axios';

class RandomBeer extends Component {
  constructor(props){
    super(props)

    this.state = {
      randomBeer: {},
    }
  }

  componentDidMount(){
    Axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then(response => {
      this.setState({
        randomBeer: response.data
      })
    })
    .catch(error => console.log(error))
  }

  render(){
    let randomBeer = this.state.randomBeer;
    return(
      <div className="allBeersContainer">
        <NavBar/>
        <h2>Random Beer</h2>
        <div className="beer">
                <figure>
                  <img src={randomBeer.image_url} alt={randomBeer.name}/>
                </figure>
                <div className="infos">
                  <div className="header">
                    <div className="title">
                      <h3>{randomBeer.name}</h3>
                      <h5>{randomBeer.tagline}</h5>
                    </div>
                    <div className="other-infos">
                      <h4>{randomBeer.attenuation_level}</h4>
                      <h6>{randomBeer.first_brewed}</h6>
                    </div>
                  </div>
                  <div className="descrip">
                    <p>{randomBeer.description}</p>
                    <p><span className="author">{randomBeer.contributed_by}</span></p>
                  </div>
                </div>
              </div>
      </div>
    )
  }
}

export default RandomBeer;
