import React from 'react';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Homepage from './components/Homepage';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render(){
      return (

              <div className="App">
                
                <Switch>
                  <Route exact path="/">
                    <Homepage/>
                  </Route> 

                  <Route exact path="/beers">
                    <AllBeers/>
                  </Route>  

                  <Route exact path="/new-beer">
                    <NewBeer/>
                  </Route> 

                   <Route exact path="/random-beer">
                    <RandomBeer/>
                  </Route>   
                            
                </Switch>
                         
              </div>
      )
  }

  }
 

export default App;
