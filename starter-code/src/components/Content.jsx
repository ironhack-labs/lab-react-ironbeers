import React from "react";
import { Route } from "react-router-dom";
import { BeerList, SingleBeer, RandomBeer, NewBeer } from ".";

const Content = ({ history }) => {
  const handleHomeClick = () => history.push("/");
  return (
    <div className="mainContent">
      <div className="homeButton" onClick={handleHomeClick} />
      <Route path="/content/beers" component={BeerList} />
      <Route path="/content/singleBeer/:id" component={SingleBeer} />
      <Route path="/content/randomBeer" component={RandomBeer} />
      <Route path="/content/newBeer" component={NewBeer} />
    </div>
  );
};

export default Content;
