import React, { Component } from "react";
import "../../App.css";
import Home from "../../Components/home/home/Home";
import axios from "axios";
import {Link} from 'react-router-dom'
class AllBeers extends Component {
  state = {
    allBeers: [],
    beersMounted: false
  };
  componentWillMount() {}
  componentDidMount() {
    axios
      .get("https://sample-api-ih.herokuapp.com")
      .then(response => {
        this.setState({ allBeers: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  showBeers() {
    return this.state.allBeers.map(eachBeer => {
      return (
        <div class="col s12 m4">
          <div class="card horizontal done">
            <div class="card-image">
              <img className="eachPicture" src={eachBeer.image_url} />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <h6>{eachBeer.name}</h6>
                <hr />
                <p>{eachBeer.tagline}</p>
                <hr />
                <p>By: {eachBeer.contributed_by}</p>
              </div>
            </div>
          </div>
            <div class="modal-footer">
              <Link exact to={`/modal/${eachBeer._id}`} checkHere={{theBeer:eachBeer}}>Check this beer out</Link>
            </div>
        </div>
      );
    });
  }
  render() {
    if (this.state.allBeers.length > 0) {
      return (
        <div className="container-fluid">
          <Home />
          <h2>All Beers</h2>
          <div className="row beers">{this.showBeers()}</div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Home />
        </div>
      );
    }
  }
}

export default AllBeers;
