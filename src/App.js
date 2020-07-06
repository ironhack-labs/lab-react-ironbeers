import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AllBeers from './components/AllBeers'
import AddBeer from './components/AddBeer';
import BeerPage from './components/BeerPage';
import axios from 'axios'


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

    return (
      <div style={{width: '500px'}}>
        {/* Pass beers to 2 components with 'render' */}
        <Switch>
          <Route  exact path='/' render={(props)=><Home {...props}/>}/>
          <Route  path='/addBeer' render={() => <AddBeer />} />
          <Route  path='/allBeers' render={()=><AllBeers beers={this.state.beers} />}/>
          <Route  path='/randBeer' render={()=><BeerPage beers={this.state.beers} rand='true' />}/>
          <Route  path='/:id' render={(props) => <BeerPage beers={this.state.beers} {...props}/>} />
        </Switch>
      </div>
    );
  }

}//end class

export default App;
