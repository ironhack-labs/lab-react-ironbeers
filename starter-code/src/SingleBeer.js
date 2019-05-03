import React from 'react';
import axios from "axios";
import Navbar from './Navbar';

class SingleBeer extends React.Component {
  constructor() {
    super();
    this.state = {
      beer: {}
    }
  }

  componentDidMount() {
    const beerId = this.props.match.params.beerId;
    if (beerId) {
      axios
        .get(`http://localhost:5000/single/${beerId}`)
        .then(singleBeersPayload => {
          const theBeer = singleBeersPayload.data
          // console.log(singleBeersPayload.data)
          this.setState({
            ...this.state,
            beer: theBeer
          })
        })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div>
          <img src={this.state.beer.image_url} alt='' />
          <p>{this.state.beer.name}</p>
          <p>{this.state.beer.tagline}</p>
          <p>{this.state.beer.contributed_by}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default SingleBeer;