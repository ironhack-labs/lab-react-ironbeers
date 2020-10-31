import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import ANav from './components/ANav'
import HomePage from './components/HomePage'
import AllBeers from './components/AllBeers'
import BeerDetail from './components/BeerDetail'
import BeerRandom from './components/BeerRandom'
import AddBeer from './components/AddBeer'
import './App.css';
import axios from 'axios'



class App extends Component {

  state = {
    beers: []
  }

  componentDidMount = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({
          beers: response.data
        })
      })
  }

  handleSearch = (e) => {
    let query = e.target.value
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((response)=>{
        this.setState({
          beers: response.data
        })
      })
  }

  render() {
    return (
      <div className="main-cont">
          <ANav />
          <Switch>
            <Route exact path='/' render = {() => {
              return <HomePage /> }} />
            <Route exact path='/beers' render = {() => {
              return <div className="all-beer-cont">
              <input name='searchText' onChange={this.handleSearch} placeholder="Search a beer!!"></input>
              {
              //Fixing the mess created by api.contributed_by as there are CARROTS THERE
              this.state.beers.map((beer, i)=>{
                let contributed_by = ''
                for (let i in beer.contributed_by) {
                  if (beer.contributed_by[i] === '<'){
                    break;
                  } else {
                  contributed_by += beer.contributed_by[i]
                  }
                }
                const {image_url, name, tagline, _id} = beer
                return (
                  <AllBeers key={i} beerId={_id} image={image_url} name={name} tagline={tagline} contributed_by={contributed_by} />
                  )
              })
              }
              </div>
               }} />
            <Route path='/beer/:id' render = {() =>{
              return <BeerDetail />
            }}/>
            <Route path='/random-beer' render={BeerRandom} />
            <Route path='/new-beer' render={ () => {
              return <AddBeer />
            }} />   
          </Switch>  
      </div>
    )
  }
}

export default App