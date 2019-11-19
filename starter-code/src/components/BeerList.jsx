import React, { Component } from "react";
import axios from "axios";

class BeerList extends Component {
  state = { beerList: [] };

  componentDidMount() {
    this.fetchBeers();
  }

  fetchBeers = async () => {
    try {
      const { data } = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/"
      );
      this.setState({ beerList: data });
    } catch (e) {
      console.log("Error fetching beers", e);
    }
  };

  handleBeerClick = id => () => {
    const { history } = this.props;
    history.push(`/content/singleBeer/${id}`);
  };

  handleSearch = async e => {
    try {
      const query = e.target.value;
      const { data } = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
      );
      this.setState({ beerList: data });
    } catch (e) {
      console.log("Error fetching beers", e);
    }
  };

  render() {
    const { beerList } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleSearch} />
        {beerList.map(eachBeer => (
          <div onClick={this.handleBeerClick(eachBeer._id)}>
            <img src={eachBeer.image_url} alt="beer" />
            <p>{eachBeer.name}</p>
            <p>{eachBeer.contributed_by}</p>
            <p>{eachBeer.tagline}</p>
          </div>
        ))}
      </div>
    );
  }
}
// 5daf440ccbc5d2fd7d19ebdd

export default BeerList;
