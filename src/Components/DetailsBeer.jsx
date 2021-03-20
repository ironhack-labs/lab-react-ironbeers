import axios from 'axios';
import React from 'react';

class DetailsBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    const beerId = this.props.match.params.beerID;
    // console.log(beerId)

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((resp) => {
        this.setState({ beer: resp.data });
        console.log('yo', resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // console.log("hey",this.props.match)

    if (this.state.beer === null) {
      return <div>Wait for it...</div>;
    }

    return (
      <div>
        <h1>Details</h1>
        <ul>
          <li>
            <img src={this.state.beer.image_url} alt=""></img>
          </li>
          <li>Name : {this.state.beer.name}</li>
          <li>Tagline :{this.state.beer.tagline}</li>
          <li>First brewed : {this.state.beer.first_brewed}</li>
          <li>Attenuation level : {this.state.beer.attenuation_level}</li>
          <li>Description : <p>{this.state.beer.description}</p></li>
          <li>Contributed by: <p>{this.state.beer.contributed_by}</p> </li>
        </ul>
      </div>
    );
  }
}

export default DetailsBeer;
