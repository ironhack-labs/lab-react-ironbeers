import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import AllBeers from './components/AllBeers'
import Home from './components/Home'
import Beer from './components/Beer'
import RandonBeer from './components/RandonBeer'




class App extends Component {

  state = {
    beers: []
  }

  async componentDidMount(){
    try{
      let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
      console.log(response)
      this.setState({
        beers: response.data
      })
    }
    catch(err){
      console.log('componentDidMount fail', err)
    }
    
  }

  render() {

    
    return (
      <div>
          
          <Switch>

            <Route exact path={'/'} render={() => {
              return <Home />
            }} />

            <Route exact path={'/beers'} render={() => {
              return <AllBeers beers={this.state.beers} />
            }} />

            <Route exact path={'/beers/:beer'} render={(routeProps) => {
              return <Beer {...routeProps} />
            }} />

            <Route exact path={'/random-beer'} render={() => {
              return <RandonBeer />
            }} />
            

          </Switch>

      </div>
    )
  }
}




export default App;
