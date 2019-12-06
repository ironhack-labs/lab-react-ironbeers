import React, { Component } from "react";
import Service from "../service/beers.service";
import { Link } from "react-router-dom";

class details extends Component {
  constructor(elm) {
    super(elm);
    this._service = new Service();
    this.state = {
      kuboLoco: {}
    };
  }


  componentDidMount = () => {
    const kuboLocoId = this.elm.match.params.id;
    this._service
      .getOneBeer(kuboLocoId)
      .then(theBeers => this.setState({
        kuboLoco: theBeers.data
      }))
      .catch(error => console.log("Error DB", error));
  };

  render() {
    return (
      <div >
        <div>
          <Link to="/">Home</Link>
        </div>
        <h1>IronBeers</h1>
        <div>
          < img src = {
            this.state.kuboLoco.image_url
          }
          alt = {
            this.state.kuboLoco.name
          }
          />
          <h3>{this.state.kuboLoco.name}</h3>
          <h5>{this.state.kuboLoco.tagline}</h5>
          <h4>{this.state.kuboLoco.first_brewed}</h4>
          <h5>{this.state.kuboLoco.attenuation_level}</h5>
          <p>{this.state.kuboLoco.description}</p>
          <p>
            Created: {this.state.kuboLoco.contributed_by}
          </p>
          <Link to={"/beers/"}>Back</Link>
        </div>
      </div>
    );
  }
}
export default details;