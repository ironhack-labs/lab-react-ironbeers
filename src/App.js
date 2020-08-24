import React from 'react';
import './App.css';

import Home from './components/Home'
import NewBeer from './components/NewBeer'
import RandomBeer from './components/RandomBeer'
import AllBeers from './components/AllBeers'
import BeersDetails from './components/BeersDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios'


class App extends React.Component {

  state = {
    beers: null
  }

  componentDidMount(){
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((res) => {
          this.setState({
            beers: res.data
          })
      })
    }  

    handleSubmit = (e) => {
      e.preventDefault()
      const {name, description, tagline, first_brewed, brewers_tips, attenuation_level, contributed_by} = e.currentTarget
  
          axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, {
            name: name.value,
            description: description.value, 
            tagline: tagline.value,
            first_brewed: first_brewed.value,
            brewers_tips: brewers_tips.value,
            attenuation_level: attenuation_level.value,
            contributed_by: contributed_by.value
          })
          .then((res) => {
            //redirect
            let newBeer = res.data
            let cloneBeers = JSON.parse(JSON.stringify(this.state.beers))
            cloneBeers.unshift(newBeer)
            this.setState({
              beers: cloneBeers
            }, () => {
              console.log(`history:` , this.props.history)
              this.props.history.push('/')
            })
            
          })
      }

  render() {
    return (
      <div >
        <Switch >
          <Route exact path="/" render={() => {
            return <Home />
          }} />
          <Route exact path="/beers" render={() => {
            return <AllBeers beers={this.state.beers}/>
          }} />
          <Route path="/beers/:id" render={(routeProps) => {
            return <BeersDetails {...routeProps}/>
          }} />
          <Route path="/random-beer" render={() => {
            return <RandomBeer />
          }} /> 
          <Route path="/new-beer" render={(routeProps) => {
            return <NewBeer onSubmit={this.handleSubmit} {...routeProps}/>
          }} />        
        </Switch>
      </div>
    );
  }
}

export default App;
