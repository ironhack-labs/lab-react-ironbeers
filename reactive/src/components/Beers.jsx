import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "./SearchBar";
import "./Beers.css";

class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all").then(response => {
      this.setState({ beers: response.data });
    });
  }

  handlerFunction = search => {
    if (search === "") {
      this.componentDidMount();
    } else {
      axios
        .get(`https://ironbeer-api.herokuapp.com/beers/search?q=${search}`)
        .then(response => {
          this.setState({ beers: response.data });
        });
    }
  };

  render() {
    return (
      <div>
        <div className="navbar navbar-dark bg-primary justify-content-center">
          <Link to="/">
            <img src="/images/home.png" alt="" />
          </Link>
        </div>
        <div className="box-container">
        <SearchBar handlerFunction={this.handlerFunction} />
        <div className="container beer-container">
            {this.state.beers.map((beer, idx) => {
              return (
                <div className="row single-beer" key={idx}>
                  <div className="col-3">
                    <img src={beer.image_url} alt="" />
                  </div>
                  <div className="col-9">
                    <Link to={`/beers/${beer._id}`} style={{ textDecoration: 'none' }}>
                      <h3>{beer.name}</h3>
                    </Link>
                    <span>{beer.tagline}</span>
                    <p><b>Created by:</b> {beer.contributed_by}</p>
                  </div>
                </div>
              );
            })}
        </div>
        </div>
      </div>
    );
  }
}
export default Beers;
