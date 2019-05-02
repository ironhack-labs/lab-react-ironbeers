// import React, { Component } from 'react';
// import {Switch, Route, Redirect} from 'react-router-dom';
// import Home from "./Home";
// import Navbar from "./Navbar";
// import AllBeers from "./AllBeers";
// import RandomBeer from "./RandomBeer";
// import NewBeer from "./NewBeer";
// import SingleBeer from "./SingleBeer";

// export default class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <Navbar/>
//         <Switch>
//           <Route exact path="/" component={Home}/>
//           <Route exact path="/beers" component={AllBeers}/>
//           <Route exact path="/beer/:id" component={SingleBeer}/>
//           <Route exact path="/random-beer" component={RandomBeer}/>
//           <Route exact path="/new-beer" component={NewBeer}/>
//           <Route render={()=><Redirect to="/"/>}/>
//         </Switch>
//       </React.Fragment>
//     )
//   }
// }


import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
      </div>
    );
  }
}

export default App;


