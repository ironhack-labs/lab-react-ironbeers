import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import "./NewBeer.css";
import moment from "moment";

export class NewBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        attenuation_level: 0,
        brewers_tips: "",
        contributed_by: ""
      }
    };

    this.inputOnChangeHandler = this.inputOnChangeHandler.bind(this);
    this.addBeerSubmitHandler = this.addBeerSubmitHandler.bind(this);
  }

  inputOnChangeHandler(e) {
    var beerCopy = { ...this.state.beer };
    beerCopy[e.target.name] = e.target.value;
    console.log(this.state.beer);
    this.setState({
      beer: beerCopy
    });
  }

  addBeerSubmitHandler() {
    console.log(this.state.beer);
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/beers/new`,
      data: qs.stringify(this.state.beer),
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    })
      .then(response => {
        console.log(response);
        this.props.history.push(`/beers/${response.data._id}`);
      })
      .catch(error => error.data);
  }

  render() {
    return (
      <div className="newBeerForm">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="name"
            value={this.state.beer.name}
            onChange={this.inputOnChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tagline">Tagline</label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="tagline"
            value={this.state.beer.tagline}
            onChange={this.inputOnChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="description"
            value={this.state.beer.description}
            onChange={this.inputOnChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="first_brewed"
            value={this.state.beer.first_brewed}
            onChange={this.inputOnChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="attenuation_level">Alcohol</label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="attenuation_level"
            value={this.state.beer.attenuation_level}
            onChange={this.inputOnChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="brewers_tips">Brewer's Tips</label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="brewers_tips"
            value={this.state.beer.brewers_tips}
            onChange={this.inputOnChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contributed_by">Created by</label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="contributed_by"
            value={this.state.beer.contributed_by}
            onChange={this.inputOnChangeHandler}
          />
        </div>
        <button onClick={this.addBeerSubmitHandler}>Submit</button>
      </div>
    );
  }
}

export default NewBeer;
