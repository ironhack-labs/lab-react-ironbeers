import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

class Beers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    this.getAllBeers();
  }

  getAllBeers() {
    axios.get("http://localhost:5000/all").then(beers => {
      this.setState({
        ...this.state,
        beers: beers.data
      });
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="row">
            {this.state.beers.map(b => {
              return (
                <div key={b._id} className="row__item">
                  <Link to={`/beers/${b._id}`}>
                    <img className="beer-img" src={b.image_url} alt={b.name} />
                    <div className="beer-info">
                      <h3>{b.name}</h3>
                      <span>{b.tagline}</span>
                      <small>Created by: {b.contributed_by}</small>
                    </div>
                  </Link>
                </div>
              );
            })}
            {console.log(this.state.beers)}
          </div>
        </div>
      </>
    );
  }
}

export default Beers;
