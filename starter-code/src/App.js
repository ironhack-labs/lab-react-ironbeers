import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import axios from 'axios';
import BeerDetails from "./BeerDetails";
import Home from './Home'
import AllBeers from "./AllBeers";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";
import logo from "./logo.svg";
// import SHA256 from "crypto-js";


class App extends Component {
  
  state = {
    beers: []
  };

  componentDidMount() {
    console.log('app')
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/`).then(res => {
      //This takes some time by the time it gets back
      this.setState({
        beers: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-warning">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              // className="logo"
              alt="IronBrews"
              width="30"
              height="30"
              style={{ marginRight: "1vw" }}
              className="d-inline-block align-top"
            />
            IronBrewskis
          </a>

          <ul className="navbar">
            <Link
              style={{
                color: "#000000",
                textDecoration: "none",
                marginRight: "5vw",
                paddingTop: "10px"
              }}
              className="nav-item"
              to={`/AllBeers`}
            >
              All Beers
            </Link>

            <Link
              style={{
                color: "#000000",
                textDecoration: "none",
                marginRight: "5vw",
                paddingTop: "10px"
              }}
              className="nav-item"
              to={`/RandomBeer`}
            >
              Random Beer
            </Link>

            <Link
              style={{
                color: "#000000",
                textDecoration: "none",
                marginRight: "5vw",
                paddingTop: "10px"
              }}
              className="nav-item"
              to={`/NewBeers`}
            >
              New Beer
            </Link>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route
            exact
            path="/AllBeers"
            render={props => <AllBeers beers={this.state.beers} {...props} />}
          />
          <Route
            exact
            path="/RandomBeer"
            render={props => <RandomBeer {...props} />}
          />
          <Route
            exact
            path="/NewBeer"
            render={props => <NewBeer {...props} />}
          />
          <Route
            exact
            path="/BeerDetails/:beerId"
            render={props => (
              <BeerDetails beers={this.state.beers} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;









// class Block {
//   constructor(timestamp, data) {
//     this.index = 0;
//     this.timestamp = timestamp;
//     this.data = data;
//     this.previousHash = "0";
//     this.hash = this.calculateHash();
//     this.nonce = 0;
//   }

//   calculateHash() {
//     return SHA256(
//       this.index + this.previousHash + this.timestamp + this.data + this.nonce
//     ).toString();
//   }

//   mineBlock(difficulty) {}
// }

// class Blockchain {
//   constructor() {
//     this.chain = [this.createGenesis()];
//   }

//   createGenesis() {
//     return new Block(0, "01/01/2017", "Genesis block", "0");
//   }

//   latestBlock() {
//     return this.chain[this.chain.length - 1];
//   }

//   addBlock(newBlock) {
//     newBlock.previousHash = this.latestBlock().hash;
//     newBlock.hash = newBlock.calculateHash();
//     this.chain.push(newBlock);
//   }

//   checkValid() {
//     for (let i = 1; i < this.chain.length; i++) {
//       const currentBlock = this.chain[i];
//       const previousBlock = this.chain[i - 1];

//       if (currentBlock.hash !== currentBlock.calculateHash()) {
//         return false;
//       }

//       if (currentBlock.previousHash !== previousBlock.hash) {
//         return false;
//       }
//     }

//     return true;
//   }
// }

// let jsChain = new Blockchain();
// jsChain.addBlock(new Block("12/25/2017", { amount: 5 }));
// jsChain.addBlock(new Block("12/26/2017", { amount: 10 }));

// console.log(JSON.stringify(jsChain, null, 4));
// console.log("Is blockchain valid? " + jsChain.checkValid());