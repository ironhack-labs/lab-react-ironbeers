import React, { Component } from 'react';
import axios from 'axios'; 
import Nav from '../components/Nav.jsx';


class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }
  componentDidMount() {
        axios
          .get(`https://ih-beers-api.herokuapp.com/beers/${this.props.match.params.beerId}`)
          .then(response => {
            this.setState({ beer: response.data });
          })
          .catch((error) =>{
              console.log(error.response.data)
          })
  }
  
  render() {
        //    let theBeer = this.state.beers.find((beer) => beer._id === this.data.match.params._id);
    return (
      <div>
        {!this.state.beer && <h1>Loading...</h1>}
        {this.state.beer && (
          <>
          <Nav />
            <img
              src={this.state.beer.image_url}
              alt={this.state.beer.image_url}
            />
            <h1>{this.state.beer.name}</h1>
            <h2>{this.state.beer.tagline}</h2>
            <h3>Made: {this.state.beer.first_brewed}</h3>
            <h4>Level: {this.state.beer.attenuation_level}</h4>
            <p>About: {this.state.beer.description}</p>
            <p>Creator: {this.state.beer.contributed_by}</p>
          </>
        )}
      </div>
    );
  }
}

export default SingleBeer;
