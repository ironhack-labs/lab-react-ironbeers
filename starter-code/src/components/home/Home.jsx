import React from "react";
import HomeItem from "./HomeItem";

export default class Home extends React.Component {
  
  render() {
    return (
      <div className="home section">
        <div className="container">
          <HomeItem
            route="/beers"
            title="All beers"
            image="../images/beers.png"
            description="Lorem ipsum dolor sit amet consecteteur adipliscing elit"
          ></HomeItem>
          <HomeItem
            route="/random-beer"
            title="Random Beer"
            image="../images/random-beer.png"
            description="Lorem ipsum dolor sit amet consecteteur adipliscing elit"
          ></HomeItem>
          <HomeItem
            route="/new-beer"
            title="New beer"
            image="../images/new-beer.png"
            description="Lorem ipsum dolor sit amet consecteteur adipliscing elit"
          ></HomeItem>
        </div>
      </div>
    );
  }
}
