import React, { Component } from 'react'
import './App.css';
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Beers from './components/Beers/Beers'
import Error from './components/Error/Error'

class App extends Component {
state = {
  beers: []
}

componentDidMount() {
  fetch('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => response.json())
    .then((data) => {
      this.setState({ beers: data });
    })
    .catch((err) => console.log(err));
}

  render() {
    const { beers } = this.state;

    return (
      <div className="App">
      <Router>
          <Switch>
            <Route path="/" component={ HomePage } exact /> 
            <Route path="/beers" render={ (rrdProps) => {
              return( <Beers {...rrdProps} beersData={ beers } /> );
            }} />
            <Route path="/beers/:beerId" component={ HomePage } exact /> 
            {/* <Route path="/random-beer" component={ Beers } />
            <Route path="/new-beer" component={ Beers } /> */}
            <Route component={ Error } />
          </Switch>
      </Router>
    </div>
    )
  }
}

export default App;

// without exact, the paths don't work