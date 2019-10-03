import React, { Component } from 'react'
import Nav from './Nav'
import axios from "axios";

export default class New extends Component {
  constructor(){
    super();

    this.state = {
      beers: [],
      newBeer: "",
      newBeerTag: "",
      newBeerCon: "",
      newBeerImg: ""
    }
  }

  addNewBeer() {
    if (this.state.newBeer === "") return;

    axios
      .post("http://localhost:5000/new", { name: this.state.newBeer, tagline: this.state.newBeerTag, contributed_by: this.state.newBeerCon, image_url: this.state.newBeerImg })
      .then(beersFromBack => {
        this.setState({
          ...this.state,
          beers: beersFromBack.data,
          newBeer: "",
          newBeerTag: "",
          newBeerCon: "",
          newBeerImg: ""
        });
      });
  }

  setNewBeerValueImg(e) {
    this.setState({
      ...this.state,
      newBeerImg: e.target.value
    });
  }

  setNewBeerValue(e) {
    this.setState({
      ...this.state,
      newBeer: e.target.value
    });
  }

  setNewBeerValueTag(e) {
    this.setState({
      ...this.state,
      newBeerTag: e.target.value
    });
  }

  setNewBeerValueCon(e) {
    this.setState({
      ...this.state,
      newBeerCon: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Nav></Nav>
        <input
              type="text"
              value={this.state.newBeerImg}
              onChange={e => this.setNewBeerValueImg(e)}
              placeholder="Enter a image url"
            ></input>
           <input
              type="text"
              value={this.state.newBeer}
              onChange={e => this.setNewBeerValue(e)}
              placeholder="Enter a name"
            ></input>
            <input
              type="text"
              value={this.state.newBeerTag}
              onChange={e => this.setNewBeerValueTag(e)}
              placeholder="Enter a Tagline"
            ></input>
            <input
              type="text"
              value={this.state.newBeerCon}
              onChange={e => this.setNewBeerValueCon(e)}
              placeholder="Enter a contribute"
            ></input>
            <button onClick={() => this.addNewBeer()}>Add new task</button>
      </div>
    )
  }
}
