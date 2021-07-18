import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom' //only here, where routes are created!!!

//import all components here:
import Home from './components/Home'
import Header from './components/Header'
import BeerDetail from './components/BeerDetail';
import BeerList from './components/BeerList'
import RandomBeer from './components/RandomBeer';
import AddForm from './components/AddForm'





function App() {   //handle routes in App.js


  
  return (
    <div>
   <Home/> 
  

<Switch>

   <Route exact path = {'/'} component = {BeerList}></Route>
   <Route path = {'/:id'} component = {BeerDetail}></Route>
   <Route path = {'/random'} component = {RandomBeer}></Route>
   <Route path = {'/new'} component = {BeerDetail}></Route>
   <Route path = {'/:id'} component = {BeerDetail}></Route>




</Switch>
    </div>
  );
}

export default App;

ReactDOM.render(<App/>, document.querySelector('#root'))
