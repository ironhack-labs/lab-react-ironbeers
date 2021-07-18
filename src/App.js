import React, { Component} from 'react'
import Header from './components/Header';
import Home from "./components/Home"
import { Switch, Route, withRouter} from "react-router-dom";
import ListBeers from "./components/ListBeers"
import RandomBeer from "./components/RandomBeer"
import NewBeer from "./components/NewBeer"
import SingleBeer from "./components/SingleBeer"
import axios from 'axios';
import Search from "./components/Search"

class App extends Component {

//WHY WE NEED TO DO IT HERE????
  state = {
    beers: []
  }

  async componentDidMount(){
    try {
      let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
      this.setState({
        beers: response.data
      })
    }
    catch(err){
      console.log('Beers fetch failed', err)
    }
  }
  
  handleAddBeer = (e) => {
    e.preventDefault();

    let newBeer = {
      name: e.target.name.value,
      tagline: e.target.tagline.value,
      first_brewed: e.target.first_brewed.value,
      brewer_tips: e.target.brewer_tips.value,
      attenuation_level: e.target.attenuation_level.value,
      contributed_by: e.target.contributed_by.value
    }
  
  axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
    .then((response) => {
      this.setState({
        beers: [response.data, ...this.state.beers]
      }, () => {
        this.props.history.push('/')
      })
    })
    .catch(() => {
      console.log('Adding beer failed')
    })
  }

  handleSearch = async (e) => {
    e.preventDefault();
    let query = e.target.value
    try {
      let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      this.setState({
        beers: response.data
      })
      console.log(response.data)
    }
    catch(err){
      console.log('Beers fetch failed', err)
    }
  }
  render() {
    return (
      <div>
         <Route exact path={'/'} render={(routeProps) => {
            return <Home/>  }}/>
                <Header/>
              <Switch>
                <Route path={'/beers'} render={(routeProps) => {
                  return <div>
                    <Search onSearch={this.handleSearch} /> 
                    <ListBeers beers={this.state.beers}/> 
                  </div>}} />
                <Route path={'/random-beer'} render={(routeProps) => {
                  return <RandomBeer/> }} />
                <Route path={'/new-beer'} render={(routeProps) => {
                  return <NewBeer onAdd={this.handleAddBeer}/> }} />
                <Route path={'/beer/:id'} render={(routeProps) => {
                  return <SingleBeer {...routeProps} /> }} />
            </Switch>
      </div>
    )
  }
}


export default withRouter(App);
