import React, { Component } from 'react';
import axios from 'axios';

class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: '',
    };
  }

  componentDidMount() {
    const BeerId = this.props.match.params.id;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${BeerId}`)
      .then((beer) => (this.setState({beer: beer.data})))
      .catch((err) => console.log(err));
  }

  render() {
    return (
        <div>
        {this.state.beer.length === 0 && <h1>Loading...</h1>}
        {this.state.beer.length !==0 && 
        <div>
            <div>
            <img style={{height: '350px'}} src={this.state.beer.image_url} alt="image of beer"/>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h1>{this.state.beer.name}</h1>
                <h2>{this.state.beer.attenuation_level}</h2>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3>{this.state.beer.tagline}</h3>
                <p>{this.state.beer.first_brewed}</p>
            </div>
            <div>{this.state.beer.description}</div>
            <div>{this.state.beer.contributed_by}</div>
        </div>
        }
        </div>
    )
  }
}

export default SingleBeer;
