import React from "react";
import "./Beers.css";
import axios from "axios";
import Beer from "./Beer";
import { Link } from "react-router-dom";

class Beers extends React.Component {
  state = {
    beers: [],
    allBeers: []
  };

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(allBeers => {
      allBeers = allBeers.data;
      this.setState({
        beers: allBeers,
        allBeers: allBeers
      });
    });
  }

  search(e) {
    this.setState({
      beers: [...this.state.allBeers].filter(beer =>
        beer.name.toLowerCase().includes(e.target.value)
      )
    });
  }

  render() {
    return (
      <div>
        {" "}
        <input type="text" onChange={e => this.search(e)}></input>
        <div>
          {this.state.beers.map(oneBeer => (
            <div className="oneBeer">
              {" "}
              <img src={oneBeer.image_url} />
              <Link to={"/beers/" + oneBeer._id}>
                <h1> {oneBeer.name}</h1>
              </Link>
              <p> {oneBeer.tagline}</p>
              <p> {oneBeer.contributed_by}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Beers;
