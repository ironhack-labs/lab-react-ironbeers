import React, { Component } from "react";
import { getBeers } from "../../services/beerService";
import LinkCard from "../LinkCard";

class Home extends Component {
  state = {
    data: [],
    randomBeerId: "",
  };

  componentDidMount() {
    getBeers().then((res) => {
      this.setState({ data: res.data });

      let randomBeer = this.state.data[
        Math.floor(Math.random() * this.state.data.length)
      ];

      this.setState({ randomBeerId: randomBeer._id });
    });
  }

  render() {
    return (
      <section>
        <h1>Home</h1>

        <LinkCard
          link="/beers"
          image="https://source.unsplash.com/08tX2fsuSLg/1600x900"
          title="All beers"
          label="See all"
        />
        <LinkCard
          link={"/beers/" + this.state.randomBeerId}
          image="https://source.unsplash.com/K8nr6rNDtUE/1600x900"
          title="Random beer"
          label="Get random"
        />
        <LinkCard
          link="/new"
          image="https://source.unsplash.com/8T5UAV6KkZA/1600x900"
          title="Add a beer"
          label="Add one"
        />
      </section>
    );
  }
}

export default Home;
