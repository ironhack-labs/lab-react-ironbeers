import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";


//const Home = () => <h1>Home</h1>;
const new_beers = () => <h1>beers</h1>;
const random_beer = () => <h1>random-beer</h1>;
const beer = () => <h1>new-beer</h1>;


const router = () => {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/beers/creat" component={new_beers} exact />
          <Route path="/random/:beerId" component={random_beer} exact />
          <Route path="/beer" component={beer} exact />
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default router;