import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export default class SingleBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    axios
      .get(
        'https://ih-beers-api2.herokuapp.com/beers/' + this.props.match.params.id
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          beer: response.data,
        });
      });
  }

  render() {

    return <div>
    <div className="container from-navbar">
          <div className="card-body">
            <h3 className="card-title">Single Beer Detail</h3>
          </div>
        </div>
    {
    this.state.beer 
? (
        <div className="card-body single-beer-card">
            <div>
                <img
                style={{height:'560px'}}
                className="img-fluid rounded "
                src={this.state.beer.image_url}
                alt='beer'
                ></img>
            </div>

            <div className="card media-body align-self-center">
                <h4 className="card-title">{this.state.beer.name}</h4>
                <p class="card-text">{this.state.beer.description}</p>
                <p class="card-text">{this.state.beer.brewers_tips}</p>
                <p class="card-text">Tagline: {this.state.beer.tagline}</p>
                <p class="card-text">Attenuation level: {this.state.beer.attenuation_level}</p>
                <p class="card-text">First Brewed: {this.state.beer.first_brewed}</p>
                <p class="card-text">Contributed by: {this.state.beer.contributed_by}</p>
            </div>
        </div>   
        )
    : 'No beer for you!'
    }</div>;
  }
}