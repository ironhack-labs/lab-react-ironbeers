import React, { Component } from 'react';
import Header from './Components/Header';
import Home from './pages/Home';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';
import './app.css';
import './loading_spinner.css';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
    currentPath: ""
  }

  getCurrentPath = (path) => {
    this.setState({
      currentPath: path
    })
  }

  render() {
    // console.log(this.state.currentPath)
    return (
      <div className="App">
        <Header currentPath={this.state.currentPath}/>
        <main className="content">
          <Switch>
            <Route exact path="/" render={ (props) => {
              return <Home {...props} getCurrentPath={this.getCurrentPath}/>
            }} />
            <Route exact path="/beers" render={ (props) => {
              return <Beers {...props} getCurrentPath={this.getCurrentPath}/>
            }} />
            <Route exact path="/:mode(beers|random-beer)/:id?" render={ (props) => {
              return <BeerDetails {...props} getCurrentPath={this.getCurrentPath}/>
            }} />
            <Route exact path="/new-beer" render={ (props) => {
              return <NewBeer {...props} getCurrentPath={this.getCurrentPath}/>
            }} />

            {/* <Route exact path="/beers" component={Beers} />
            <Route
              path="/:mode(beers|random-beer)/:id?"
              component={BeerDetails}
            />
            <Route path="/new-beer" component={NewBeer} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
