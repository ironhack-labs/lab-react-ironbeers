import React from "react";
import axios from "axios";

class OneBeer extends React.Component {

  state = {
    beer: null,
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        this.setState({ beer: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.beer === null) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>One Beer</h1>
        <h2>
          {this.state.beer.name} {this.state.beer.price}€
        </h2>
        <img src={this.state.beer.image_url} alt="" />
      </div>
    );
  }
}

export default OneBeer;
