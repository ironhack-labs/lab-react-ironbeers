import React from 'react';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Homepage from './components/Homepage';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';

class App extends React.Component {
  render(){
      return (

              <div className="App">
                
                <Switch>
                  <Route exact path="/">
                    <Homepage/>
                  </Route> 

                  <Route exact path="/beers">
                    <Header/>
                    <AllBeers/>
                  </Route>  

                  <Route exact path="/new-beer">
                    <Header/>
                    <NewBeer/>
                  </Route> 

                   <Route exact path="/random-beer">
                    <Header/>
                    <RandomBeer/>
                  </Route>   
                            
                </Switch>
                         
              </div>
      )
  }

  }
 

export default App;
