import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Beers from "./Beers/Beers";
import RandomBeer from "./RandomBeer/RandomBeer";
import NewBeer from "./NewBeer/NewBeer";
import axios from "axios";
import BeerDetails from "./BeerDetails/BeerDetails";

export default class App extends React.Component {
  state = {
    allBeers: [],
  };

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(allBeers => {
      allBeers = allBeers.data;
      this.setState({
        allBeers: allBeers
      })
    });
 
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home />;
            }}
          />
          <Route
            path="/randombeer"
            render={() => {
              axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
              .then((randomBeer) =>{
                let beer = randomBeer.data
                console.log(`estoy dentro de App!${randomBeer.data}`)
                debugger
              return <RandomBeer 
              image={beer.image_url}
              name={beer.name}
              tagline={beer.tagline}
              first_brewed={beer.first_brewed}
              attenuation_level={beer.attenuation_level}
              description={beer.description}
              contributed_by={beer.contributed_by} 
              ></RandomBeer>
              })
            }}
          />
          <Route
            exact
            path="/beers"
            render={() => {
              return <Beers allBeers={this.state.allBeers} />;
            }}
          />
          <Route
            exact
            path="/:id"
            render={props => {
              let oneBeer = this.state.allBeers.filter(beer => beer._id === props.match.params.id)
              return (
              <BeerDetails 
              image={oneBeer[0].image_url}
              name={oneBeer[0].name}
              tagline={oneBeer[0].tagline}
              first_brewed={oneBeer[0].first_brewed}
              attenuation_level={oneBeer[0].attenuation_level}
              description={oneBeer[0].description}
              contributed_by={oneBeer[0].contributed_by}
              ></BeerDetails>);
            }}
          />
          <Route
            exact
            path="/newbeer"
            render={() => {
              return <NewBeer />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
