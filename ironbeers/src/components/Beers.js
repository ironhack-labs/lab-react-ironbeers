import React from "react";
import { Header } from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";

export class Beers extends React.Component {
  constructor() {
    super();
    this.state = {
      listOfBeers: []
    };
  }

  getAllBeers = () => {
    axios
      .get("https://ironbeer-api.herokuapp.com/beers/all")
      .then(list => {
        this.setState({ listOfBeers: list.data });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    let listOfBeers = this.state.listOfBeers;
    console.log(listOfBeers);
    return (
      <div>
        <Header />
        <div>
          {listOfBeers.map((beer, i) => {
            return (
              <div key={i}>
                <Link to={`/beers/${beer._id}`}>
                  <img height="50px" src={beer.image_url} alt={beer.name} />
                  <h2>{beer.name}</h2>
                  <p>{beer.tagline}</p>
                  <p>Created by: {beer.contributed_by}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
