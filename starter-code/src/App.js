// import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route} from "react-router-dom"

import React from 'react'

import Home from "./views/Home"
import RandomBeer from "./views/RandomBeer"
import NewBeer from "./views/NewBeer"
import NotFound from "./views/NotFound"
import AllBeers from "./views/AllBeers"
import SingleBeer from "./views/SingleBeer"



export default function App() {
  return (
    <div>


        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/all-beers" component={AllBeers} />
            <Route path="/random-beer" component={RandomBeer}/>
            <Route path="/new-beer" component={NewBeer}/>
            <Route path="/single-beer/:id" component={SingleBeer}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </div>
  )
}



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
