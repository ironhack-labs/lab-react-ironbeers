import React from "react";
import axios from "axios";
import { Link, Navlink, Route } from "react-router-dom";

class BeerList extends React.Component {
  state = {
    beerList: [],
    search: ""
  };

  searchBeer = event => {
    let search = "";
    if (event) {
      search = event.target.value;
    }

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      .then(response => {
        this.setState({ beerList: response.data, search: search });
      })
      .catch(err => console.log(err));
  };

  render() {
    const beers = this.state.beerList;
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Beer List</h1>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search for a beer"
          onChange={this.searchBeer}
          value={this.state.search}
        />
        {beers.map(beer => {
          return (
            <div key={beer._id} className="beer-list-container">
              <img src={beer.image_url} alt={beer.name} />
              <div className="beer-list-item">
                <Link to={`/beers/${beer._id}`}>
                  <h2>{beer.name}</h2>
                </Link>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    console.log("I mounted");
    this.searchBeer();
    // axios
    //   .get("https://ih-beers-api2.herokuapp.com/beers")
    //   .then(response => {
    //     this.setState({ beerList: response.data });
    //   })
    //   .catch(err => console.log(err));
  }
}
export default BeerList;
