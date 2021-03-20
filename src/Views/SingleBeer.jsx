import React from 'react';
import Header from '../Components/Header';
import axios from 'axios';
import '../styles/SingleBeer.css';

class SingleBeer extends React.Component {
  state = {
    beer: ""
  }

  componentDidMount() {
    let beerID;
    if (this.props.beerID) beerID = this.props.beerID;
    else beerID = this.props.match.params.beerID; 

    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerID}`)
    .then(response => {
      this.setState({beer: response.data});
    })
    .catch(error => console.log(error));
  }
  
  render() {
    return (
      <div>
        <Header />
        {this.state.beer && 
          <div className="SingleBeer__container">
            <img src={this.state.beer.image_url} alt={this.state.beer.name}/>
            <h2>{this.state.beer.name}</h2>
            <p className="SingleBeer__level">{this.state.beer.attenuation_level}</p>
            <p className="SingleBeer__tagline">{this.state.beer.tagline}</p>
            <p className="SingleBeer__date">{this.state.beer.first_brewed}</p>
            <p className="SingleBeer__description">{this.state.beer.description}</p>
            <p className="tagline">{this.state.beer.contributed_by}</p>
          </div>
        }
      </div>
    )
  }
}

export default SingleBeer;
