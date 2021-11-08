import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/HomePage'
import Beers from './components/Beers';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    beers: []
  }

  componentDidMount() {
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => {
      this.setState({beers: response.data})
      console.log(response.data)
    })
    .catch((e) => {
      console.log('error getting beers from API', e)
    })
  }

  render() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/beers">
          <Beers beers={this.state.beers} />
        </Route>
      </Switch>
    </div>
  );
  }

}

export default App;
