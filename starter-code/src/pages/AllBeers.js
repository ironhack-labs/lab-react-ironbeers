import React, { Component } from "react";
import Navbar from "../components/Navbar";
import BEER_SERVICE from "../services/Beerlist";
import { Link } from "react-router-dom";

export  class AllBeers extends Component {
  state = {
    beers: [],
  };
  async componentDidMount() {
    const { data } = await BEER_SERVICE.readAll();
    const beers = data.map((e) => ({ ...e, key: e._id }));
    this.setState({ beers });
  }
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        {this.state.beers.map((e) => {
          return (
            <div className="card mb-3" style={{ width: "540px" }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={e.image_url} className="card-img" alt="..." style={{ width: "125px", height: "175px", margin: '10px'}} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{e.name}</h5>
                    <p className="card-text">{e.tagline}</p>
                    <p className="card-text">
                      <small className="text-muted">{e.contributed_by}</small>
                    </p>
                  </div>
                  <Link to={`/beers/${e.id}`}>Detail View</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default AllBeers