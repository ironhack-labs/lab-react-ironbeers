import React, { Component } from "react";
import "./ListBeers.css";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import { Link } from "react-router-dom";

export class ListBeers extends Component {
  constructor(props) {
    super(props);
    this.state = { allBeers: [], search: "" };
    this.handleChange=this.handleChange.bind(this)
  }

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((beerApiResponse) => {
        this.setState({ allBeers: beerApiResponse.data });
      })
      .catch((err) => console.log(err));
  }

  handleChange(event) {
    let value = event.target.value
    this.setState({search:value})
  }

  render() {
    let selectedBeers = this.state.allBeers.filter((beer) => beer.name.toLowerCase().includes(this.state.search.toLowerCase()))
        
    return (
      <React.Fragment>
        <header>
          <NavBar />
        </header>
        <h1 className="list-beers-title">Welcome to Beeradise</h1>
        <div className="searchBar">
          <label htmlFor="search">Search: </label>
          <input onChange={this.handleChange} type="text" id="search"/>
        </div>
        <main className="list-beers-page">
          {selectedBeers.map((beer, index) => (
            <div key={index} className="one-of-the-beers">
              <figure className="one-of-the-beers-picture-container">
                <Link to={`/list-beers/${beer._id}`}>
                  <img
                    className="one-of-the-beers-picture"
                    src={beer.image_url}
                    alt={beer.name}
                  />
                </Link>
              </figure>

              <div className="one-of-the-beers-infos">
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>
                  <strong>Created by:</strong> {beer.contributed_by}
                </p>
              </div>
            </div>
          ))}
        </main>
      </React.Fragment>
    );
  }
}

export default ListBeers;
