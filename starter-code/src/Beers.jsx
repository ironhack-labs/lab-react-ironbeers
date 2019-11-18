import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const data = "https://ih-beers-api2.herokuapp.com/beers";

export default class Beers extends React.Component {
  state = {
    beers: [],
  };
  componentDidMount = () => {
    axios.get(data).then(allb => this.setState({ beers: allb.data }));
  };
  showEachBeer = () =>
    this.state.beers.map(each => {
      return (
        <div>
          <h3>
            <Link to={`/beers/${each._id}`}>
              {each.name}
            </Link>
          </h3>
          {each.tagline} <br />
          <img src={each.image_url} title={each.name} />
          <br />
          <br />
        </div>
      );
    });
  render = () => {
    return (
      <React.Fragment>
        <div>
          {this.showEachBeer()}
        </div>
        <div>
          <Link to="/">
            <button className="btn btn-warning">Home</button>
          </Link>
        </div>
      </React.Fragment>
    );
  };
}
