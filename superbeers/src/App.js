import React, {Component} from 'react';
import Home from "./components/stateful/home"
import BeerList from './components/stateful/beerList'
import { Switch, Route } from 'react-router-dom'
import BeerDetails from './components/stateful/beerDetails';
import AddForm from './components/stateful/addForm';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {}
  }
  
  render() {
  return (
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/beer/list" exact component={BeerList} />
    <Route path='/beer/:id' exact component={BeerDetails}/>
    <Route path='/beer/random' exact component={BeerDetails}/>
    <Route path='/add' exact component={AddForm}/>

  </Switch>
  )
}
}

export default App;
