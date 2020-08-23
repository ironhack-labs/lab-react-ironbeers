import React, { Component } from 'react'
import axios from 'axios'
import {Switch, Route, withRouter} from 'react-router-dom'


import HomePage from "./components/HomePage"
import AllBeers from "./components/AllBeers"
import RandomBeer from "./components/RandomBeer"
import BeerDetails from "./components/BeerDetails"
import NewBeer from "./components/NewBeer"


class App extends Component {

  state = {
    beerList: []
  }


  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => {
        // console.log(res)
        this.setState({
          beerList: res.data
          // beerList: res.data
        })
        // console.log(this.state.beerList)
      })
  } 


  addNew = (event) => {
    event.preventDefault()
    const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = event.currentTarget
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
      name: name.value,
      tagline:  tagline.value,
      description: description.value,
      first_brewed: first_brewed.value,
      brewers_tips: brewers_tips.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value,
    })
    .then((res) => {
      console.log(res)
      let newBeer = res.data
      let cloneBeerList = JSON.parse(JSON.stringify(this.state.beerList))
      cloneBeerList.unshift(newBeer)
      this.setState({
        beerList: cloneBeerList
      }, () => {
      this.props.history.push('/beers')
      })
    })
    .catch((err) => {
      console.log("error is:", err)
    })
  }



  render() {
    return (
      <div>

        
        <Switch>
        {/* create routes and link to components */}

          <Route exact path="/" render={() => {
              return <HomePage />
            }} />
          <Route exact path="/beers" render={() => {
            return <AllBeers beerList={this.state.beerList}/>
          }} />
          <Route path="/random-beer" render={() => {
            return <RandomBeer />
          }} />
          <Route exact path="/beers/:beerId" render={(routeProps) => {
            return <BeerDetails beerList={this.state.beerList} {...routeProps}/>
          }} />
          <Route path="/new-beer" render={(routeProps) => {
            return <NewBeer onSubmit={this.addNew} {...routeProps}/>
          }} />

        </Switch>
        
      </div>
    )
  }
}


export default withRouter(App)