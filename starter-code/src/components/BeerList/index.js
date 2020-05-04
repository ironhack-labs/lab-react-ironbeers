import React, { Component } from "react";
import { getBeers } from "../../services/beerService";
import BeerCard from "../BeerCard";
import HomeButton from "../HomeButton";

class BeerList extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    getBeers().then((res) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>All Beers</h1>

        {data.map((item, index) => (
          <BeerCard
            key={index}
            image={item.image_url}
            name={item.name}
            tagline={item.tagline}
            contributor={item.contributed_by}
            link={`/beers/${item._id}`}
          />
        ))}

        <HomeButton />
      </div>
    );
  }
}

export default BeerList;
