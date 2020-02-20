import React, { Component } from "react";
import APIHandler from "./../api/Handler";
import { Link } from "react-router-dom";

const api = new APIHandler();
console.log(api);

export default class beers extends Component {
  state = {
    beers: []
  };
  componentDidMount() {
    api
      .get("/beers")
      .then(apiRes => {
        this.setState({ beers: apiRes.data });
        console.table(this.state.beers);
      })
      .catch(apiErr => console.error(apiErr));
  }

  //   beerClicked = (e) => console.log(e.target.id)
  //   onClick={(e) => e.target.id ? this.beerClicked(e) :""}

  render() {
    return this.state.beers
      ? this.state.beers.map((b, i) => (
          <Link to={"/beers/" + b._id}>
            <div key={i} className="beer-box flex">
              <img id={b._id} src={b.image_url} alt={b.name + " image"} />
              <div>
                <h2 id={b._id} className="name">
                  {b.name}
                </h2>
                <h3 id={b._id} className="tagline">
                  {b.tagline}
                </h3>
                <p id={b._id} className="contributed-by">
                  {b.contributed_by
                    ? b.contributed_by.substring(
                        0,
                        b.contributed_by.search("<") - 1
                      )
                    : ""}
                </p>
              </div>
            </div>
          </Link>
        ))
      : "";
  }
}

