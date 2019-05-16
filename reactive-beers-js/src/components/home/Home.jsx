import React from "react";
import Beers from "./img/beers.png";
import randomBeers from "./img/random-beer.png";
import newBeer from "./img/new-beer.png";
import BeerList from "../beer-list/BeerList";
import BeerDetails from "../beer-detail/BeerDetails";
import RandomBeer from "../random-beer/RandomBeer";
import AddBeer from "../add-beer/AddBeer";

import { Link, Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/beer" component={BeerList} />
        <Route exact path="/single/:id" component={BeerDetails} />
        <Route exact path="/random" component={RandomBeer} />
        <Route exact path="/addbeer" component={AddBeer} />
      </Switch>

      <header className="App-header">
        <h1>Hello ironbeers</h1>
      </header>

      <section className="body">
        <div className="all-beers">
          <figure>
            <img src={Beers} alt="beers" />
          </figure>
          <Link to="/beer" className="btn btn-primary">
            <h3>All beers</h3>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, elit a lacinia vehicula, justo odio tempus massa, in
            interdum ipsum augue sed nibh. Cras convallis blandit arcu id
            euismod. Sed aliquam leo sed purus pretium, quis scelerisque augue
            condimentum. Morbi facilisis ipsum non magna scelerisque, vitae
            varius tellus euismod.
          </p>
        </div>

        <div className="random-beer">
          <figure>
            <img src={randomBeers} alt="beers" />
          </figure>
          <Link to="/random">
            <h3>Radom beers</h3>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, elit a lacinia vehicula, justo odio tempus massa, in
            interdum ipsum augue sed nibh. Cras convallis blandit arcu id
            euismod. Sed aliquam leo sed purus pretium, quis scelerisque augue
            condimentum. Morbi facilisis ipsum non magna scelerisque, vitae
            varius tellus euismod.
          </p>
        </div>

        <div className="new-beer">
          <figure>
            <img src={newBeer} alt="beers" />
          </figure>
          <Link to="/new">
            <h3>New beers</h3>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, elit a lacinia vehicula, justo odio tempus massa, in
            interdum ipsum augue sed nibh. Cras convallis blandit arcu id
            euismod. Sed aliquam leo sed purus pretium, quis scelerisque augue
            condimentum. Morbi facilisis ipsum non magna scelerisque, vitae
            varius tellus euismod.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
