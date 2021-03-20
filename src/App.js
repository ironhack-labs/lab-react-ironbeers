import React from 'react';
import Home from './views/Home';
import NavBar from './components/Header';
import AllBeers from './views/AllBeers';
import SingleBeer from './views/SingleBeer';
import NewBeer from './views/NewBeer';
import './App.css';
import { Switch, Route } from "react-router-dom";
import axios from 'axios'

class App extends React.Component {

state={
  allBeers: null,
  randomBeer: null
}
 
componentDidMount(){
  axios.get("https://ih-beers-api2.herokuapp.com/beers")
  .then((beers)=>{
      this.setState({allBeers : beers.data})})
  .catch((err)=>console.log(err))

}


  getNewBeer=(inputs)=>{
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new")
    .then(()=>this.setState({inputs, ...this.state.allBeers}))
    .catch((err)=>console.log(err))
    
  }

  

render(){ 
  return (

  <div className="App">

    <NavBar/>

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/beers" component={AllBeers}/>
      <Route exact path="/beers/:id" component={SingleBeer}/>

        { <Route
        path="/new-beer"          
        render={() => {
            return <NewBeer callback={this.getNewBeer} />;
          }}
        />}
        
        { <Route
        path="/random-beer"          
        render={() => {
          return  <SingleBeer />}}
        />}

    </Switch>
  

   
  </div>
);}
 
}

export default App;
