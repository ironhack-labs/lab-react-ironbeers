import React from 'react';
import './App.css';
import Home from './Component/Home'

import {Redirect, Route, Switch} from 'react-router-dom'



class App extends React.Component{
  render(){

    return (
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>

          </Switch>
        </div>
    );
  }
}

export default App;
