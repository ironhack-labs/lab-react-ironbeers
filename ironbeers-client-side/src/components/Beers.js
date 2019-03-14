import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfBeers: [] };
  }

  getAllBeers = () => {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(responseFromApi => {
        this.setState({
          listOfBeers: responseFromApi.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  // REVOIR LE LAYOUT PLUS TARD
  render() {
    return (
      <div>
        <Header />
        <ul>
          {this.state.listOfBeers.map(oneBeer => {
            return (
              <li key={oneBeer._id}>
                <div className="row">
                  <div className="col-5">
                    <img
                      src={oneBeer.image_url}
                      alt=""
                      style={{ width: "8%" }}
                    />
                  </div>
                  <div className="col-7">
                    <Link to={`/beers/${oneBeer._id}`}>{oneBeer.name}</Link>
                    <p> {oneBeer.tagline} </p>
                    <p> contributed by : {oneBeer.contributed_by} </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Beers;
