import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import paths from "./paths.json";
import AllBeers from "./components/AllBeers";
import SingleBeer from "./components/SingleBeer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import { Redirect } from 'react-router-dom';
// import {withRouter} from "react-router"

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/all").then(beers => {
      this.setState({
        ...this.state,
        beers: beers.data
      });
    })
    .then(() => {
      axios.get("http://localhost:5000/random")
      .then(beer=> {
        this.setState({
          ...this.state,
          randomBeer: beer.data
        });
      })
    });
  }

  getOneBeer(id) {
    let selectedBeer = this.state.beers.filter(beer => beer._id === id);
    return selectedBeer[0];
  }
  // getRandomBeer() {
  //   console.log("2")
  //   axios.get("http://localhost:5000/random").then(beer => {
  //     console.log("3")
  //     this.setState({
  //       ...this.state,
  //       randomBeer: beer
  //     })
  //   })
  // }

  newBeerToAxios(e) {
    let newState = {
      ...this.state
    };
    console.log(e)
    axios
    .post("http://localhost:5000/new", { ...e })
    .then(()=> {
      axios.get("http://localhost:5000/all").then(beers => {
      this.setState({
        ...this.state,
        beers: beers.data
      });
      // this.props.history.push("http://localhost:3000/")
      this.handleRedirect(beers)
    })
    })
   
  }

  handleRedirect (res){
    if( res.status === 200 ){
        window.location.href = 'http://localhost:3000/';
    }
}


  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home></Home>;
            }}
          />
          <Route
            exact
            path={paths.all.path}
            render={props => {
              return (
                <div className="all-beers-container">
                  <Nav></Nav>
                  <AllBeers beers={this.state.beers}></AllBeers>
                </div>
              );
            }}
          />
          <Route
            path="/single/:id"
            render={props => {
              let chosenBeer = this.getOneBeer(props.match.params.id);
              return (
                <React.Fragment>
                  <Nav></Nav>
                <div>
                  <SingleBeer {...chosenBeer}></SingleBeer>
                </div>
                </React.Fragment>
              );
            }}
          />
          <Route
            path={paths.random.path}
            render={props => {
              return (
                <React.Fragment>
                  <Nav></Nav>
                <div>
                  <SingleBeer {...this.state.randomBeer}></SingleBeer>
                </div>
                </React.Fragment>
              );
            }}
          />
          {/* <Route
            path={paths.random.path}
            render={props => {
              return (
                <div>
                  <RandomBeer {...this.state.randomBeer}></RandomBeer>
                </div>
              );
            }}
          /> */}
             <Route
            path={paths.new.path}
            render={props => {
              return (
                <React.Fragment>
                  <Nav></Nav>
                <div>
                  <NewBeer fromApp={state => this.newBeerToAxios(state)}></NewBeer>
                </div>
                </React.Fragment>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
// export default withRouter(NewBeer)
