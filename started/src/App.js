import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Home from './components/Home';
import BeersList from './components/BeersList';
import Random from './components/Random';
import New from './components/New';


class App extends Component {

  constructor(){
    super()
    this.state = {
        allBeers: []
    }
}

  render() {
    return (
      
      <div className="App">
      <Router>
        <section className="container">
        
        
          <div className="column">
              
                  <div>
                    <Route exact path='/Home' component={Home}/>
                    <Route exact path='/Beers' component={BeersList}/>
                    <Route exact path='/random' component={Random}/>
                    <Route exact path='/new' component={New}/>

                     <Redirect to="/home"/> 
                  </div>
              
              
            </div>
        </section> 
     </Router>
      </div>
    );
  }
}

export default App;
