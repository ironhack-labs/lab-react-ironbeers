import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import ListBeers from './components/ListBeers'
import axios from 'axios'
import SingleBeer from './components/SingleBeer';

class App extends React.Component{

  state = {
    allbeers: []
  }

  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(result => {
        this.setState({allbeers: result.data})
      })
      .catch(error => {
        console.log(error)
      })
      
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route path="/beers/:id" component={routeProps=><SingleBeer {...routeProps} />} />
          <Route path="/beers" exact component={()=><ListBeers allbeers={this.state.allbeers}/>} />
          <Route path="/random-beer" exact component={()=><SingleBeer random />} />
          <Route path="/new-beer" exact />
          <Route path="/" exact component={()=><Home />} />
        </Switch>
      </div>
    )
  }
}

export default App;
