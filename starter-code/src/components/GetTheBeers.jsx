import React, { Component } from "react";
import axios from "axios"; //  npm i axios
import { Link } from "react-router-dom";


export default class GetTheBeers extends Component {
  state = {
    beers: [],
    APIEndpoint: "https://ih-beers-api2.herokuapp.com/beers"
  };

  componentDidMount() {
    axios
      .get(this.state.APIEndpoint)
      .then(apiRes => this.setState({ beers: apiRes.data }))
      .catch(apiErr => console.error(apiErr));
  }

  render() {
    return this.state.beers.length ? (
      <div>
        <h1 className="title">Beers are nice !</h1>
        <table>
          {this.state.beers.map((beer, i) => (
            <div key={i}>
              <tr>
                {" "}
                <td>{beer.name} </td>
                <td>({beer.description})</td>
                <td>
                  {" "}
                  <Link to={"/beer/" + beer._id}>know more about this beer</Link>
                </td>
              </tr>
            </div>
          ))}
        </table>
      </div>
    ) : (
      <p>no beers yet...</p>
    );
  }
}
