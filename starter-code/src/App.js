import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout'


const App = () => {
    return (
      <div className="App">
        <Layout>
          <p>HOLA</p>
          <Switch>
            {/* <Route exact path='/' component={Beers}/>
            <Route path='/random-beer' component={RandomBeer}/>
            <Route path='/new-beer' component={NewBeer}/> */}
          </Switch>
        </Layout>
      </div>
    );
  }


export default App;
