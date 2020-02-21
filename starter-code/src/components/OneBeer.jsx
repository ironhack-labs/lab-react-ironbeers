import React, { Component } from "react";
import axios from "axios"; //  npm i axios

class OneBeer extends Component {
  state = {
    beer: null,
    APIEndpoint: `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
  };

  componentDidMount() {
    axios
      .get(this.state.APIEndpoint)
      .then(apiRes => this.setState({ beer: apiRes.data }))
      .catch(apiErr => console.error(apiErr));
  }

  render() {
    if (this.state.beer === null) return <div>No beer</div>;
    
    return (
      <div>
        <h1 className="title">Beers are nice !</h1>
        <table>
          <tr>
            <td>{this.state.beer.name}</td>
            <td>{this.state.beer.description}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default OneBeer;
