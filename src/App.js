import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import AllBeers from './components/AllBeers'
import axios from 'axios'
import RandBeer from './components/RandBeer';
import AddBeer from './components/AddBeer';
import Home from './components/Home';
import BeerPage from './components/BeerPage';


class App extends Component {
  state= {
    beers: []
  }
  

  // Set state to response from Axios fetching the beers list
  componentDidMount(){
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(response=>{
      this.setState({ //set state to beer list
        beers: response.data
      })
    })
  }
  
  
  render() {
    // const randNum=Math.floor(Math.random()*(this.state.beers.length-1))
    // Number for random beer
    // console.log(randNum)
    return (
      <div>
        {/* Pass beers to 2 components with 'render' */}
        <Switch>
          <Route  exact path='/' component={Home}/>
          <Route  path='/allBeers' render={()=><AllBeers beers={this.state.beers} />}/>
          <Route  path='/randBeer' render={()=><BeerPage beers={this.state.beers} rand='true' />}/>
          <Route  path='/:id' render={(props) => <BeerPage beers={this.state.beers} {...props}/>} />
          <Route  path='/addBeer' component={AddBeer}/>
        </Switch>
      </div>
    );
  }

}//end class

export default App;
