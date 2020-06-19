import React from 'react';
import './App.css';
import {withRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import axios from 'axios'
// import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Home from './component/Home'
import AllBeers from './component/AllBeers'
import Single from './component/Single'
import New from './component/New'
import Random from './component/Random'


class App extends React.Component {

  state = {
    beers: []
  }
  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((res) => {
      console.log(res.data)
      this.setState({
        beers: res.data
      })
    })
  }
  handleAddBeer = (e) => {
    e.preventDefault()
    console.log(e.target.first_brewed.value)
    console.log(e.target.brewers_tips.value)
    console.log(e.target.attenuation_level.value)
    console.log(e.target.contributed_by.value)
    let name = e.target.name.value
    let tagline = e.target.tagline.value
    let description = e.target.description.value
    let first_brewed = e.target.first_brewed.value
    let brewers_tips = e.target.brewers_tips.value
    let attenuation_level = e.target.attenuation_level.value
    let contributed_by = e.target.contributed_by.value


    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
      name: name,
      description: description,
      tagline: tagline,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by
    })
    .then((res) => {
      console.log('worked')
      this.setState({
        beers: [...this.state.beers, res.data]
      }, () => {
        this.props.history.push('/beers') //redirecting user to different paths
      })
    })
  }

  render(){
    return (
      <div className="App">
      <Home />
            <Switch>
        <Route exact path="/beers" render={() => {
          return <AllBeers beers={this.state.beers} />
        }}/>
        <Route path="/beers/:beerId" render={(routeProps) => {
          return <Single {...routeProps} />
        }}/>
        <Route exact path="/random-beer" render={() => {
          return <Random  />
        }}/>
        <Route path="/new-beer" render={() => {
          return <New  onAdd={this.handleAddBeer} />
        }}/>
      </Switch>
      </div>
    );
  }

}

export default withRouter(App)
