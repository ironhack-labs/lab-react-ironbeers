import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import axios from 'axios'
import ListBeers from './components/ListBeers/ListBeers';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SingleBeer from './components/SingleBeer/SingleBeer';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';


class App extends React.Component {
  state = {
    beer: [],
    randomBeer: [],
   
  }


  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => {
      this.setState({
      beers: response.data
      })
      
  
    })
  }


 render() {
    if(this.state.beers && this.state.beers.length < 1)  {
      return <h1>brewing...</h1>
    }
  return (
  <div className="App">
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" render={(props) => <ListBeers  beers={this.state.beers} onSearch={this.searchHandler} {...props}/>} />
        <Route exact path="/beers/:id" render={(props) => <SingleBeer beers={this.state.beers} {...props} />} />
        <Route exact path="/random-beer" render={(props) => <RandomBeer randomBeer={this.state.randomBeer} {...props} />} />
        <Route exact path="/new-beer" component={NewBeer} />
     </Switch>
     </BrowserRouter>

    </div>
  );
 }
}
export default App;


