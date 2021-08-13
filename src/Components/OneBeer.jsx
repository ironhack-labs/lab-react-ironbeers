import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

class OneBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    const beerId = this.props.match.params.beerId;

    //console.log('mounting', beerId);

    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/' + beerId)
      .then((res) => {
        //console.log(res.data);
        this.setState({
          beer: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps) {
    const beerId = this.props.match.params.beerId;

    if (beerId !== prevProps.match.params.beerId) {
      axios
        .get('https://ih-beers-api2.herokuapp.com/beers/' + beerId)
        .then((res) => {
          //console.log('updating', res.data);
          this.setState({
            beer: res.data,
          });
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    if (this.state.beer === null) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Navbar />

        <div key={this.state.beer._id}>
          <img
            src={this.state.beer.image_url}
            alt=""
            style={{ width: '30px' }}
          />
          <div>
            <h2>{this.state.beer.name}</h2>
            <h3>{this.state.beer.tagline}</h3>
            <p>{this.state.beer.first_brewed}</p>
            <p>{this.state.beer.attenuation_level}</p>
            <p>{this.state.beer.description}</p>
            <p>{this.state.beer.contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default OneBeer;
