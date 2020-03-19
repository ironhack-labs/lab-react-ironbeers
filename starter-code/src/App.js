import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Home/>
//       </div>
//     );
//   }
// }
const App = () => (
  <Router>
    <Home>
    <Switch>
      <Route path="/beers" exact components={() => <AllBeers/>}/>
      <Route path="/random-beer" exact components={() => <RandomBeer/>}/>
      <Route path="/new-beer" exact components={() => <NewBeer/>}/>
    </Switch>
    </Home>
  </Router>
);
export default App;
