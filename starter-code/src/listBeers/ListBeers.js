import React, { Component } from "react";
import axios from "axios";
import "./listBeers.css";
import { Link } from "react-router-dom";
const url = "https://ih-beers-api2.herokuapp.com/beers/";

export default class ListBeers extends Component {
  constructor() {
    super();
    this.state = {
      listOfBeers: []
    };
  }

  componentDidMount() {
    axios.get(url).then(elements => {
      this.setState({
        ...this.state,
        listOfBeers: elements.data
      });
    });
  }

  render() {
    console.log(this.state.listOfBeers);
    return (
      <div className="border-list-container">
        <ul>
          <div className="list-container">
            {this.state.listOfBeers.map((element, idx) => {
              return (
                <Link to={"/beers/" + element._id}>
                  <li className="list-element">
                    <div className="beer-container">
                      <img src={element.image_url} className="beer-image" />
                      <h2 className="beer-title">{element.name}</h2>
                    </div>
                  </li>
                </Link>
              );
            })}
          </div>
        </ul>
      </div>
    );
  }
}
