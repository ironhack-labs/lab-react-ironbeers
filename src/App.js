import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Homepage from './components/Homepage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" render={(props) => <Homepage {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
