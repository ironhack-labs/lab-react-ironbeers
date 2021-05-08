import React from 'react';
import './App.css';
import axios from 'axios'

// import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'

import Homepage from './components/Homepage/Homepage'
import Beers from './components/Beers/Beers'
import SingleBeer from './components/SingleBeer/SingleBeer'

class App extends React.Component{

  state = {
    beers: '',
  }

  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((result)=>{
      this.setState({...this.state, beers: result.data})
      console.log(this.state.beers)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route path="/random-beer" exact component={()=><SingleBeer random/>} />
          <Route path="/beers/:_id" component={(routeProps)=>{
            return <SingleBeer {...routeProps}/>
          }}/>
          <Route path="/beers" exact component={()=><Beers beers={this.state.beers}/>}/>
          <Route path="/" exact component={()=><Homepage />}/>
        </Switch>
      </div>
    )
  }
}

export default App;
