import React, { Component } from "react";
import axios from "axios";

class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
      .then((apiResponse) => {
          console.log(apiResponse)
        this.setState({ beer: apiResponse.data });
      })
      .catch((error) => {});
  }

  render() {
    if (!this.state.pokemon) return null;
    return (
      <div>
        <h1>Beer Details</h1>

        <table>
          <tbody>
            <tr>
              <td className="img-box">
                <img
                  className="img-size"
                  src={this.state.beer.image_url}
                  alt="beer_img"
                />
              </td>
              <td>
                <p className="beername">{this.state.beer.name}</p>
                <p className="tagline">{this.state.beer.tagline}</p>
                <p className="contributor">{this.state.beer.contributed_by}</p> 
                
              
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BeerDetails;
