import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {API_URL} from './config'
//-------COMPONENTS-----//
import Home from './components/Home'
import Header from './components/Header'
import AllBeers from './components/AllBeers'
import BeerDetails from './components/BeerDetails' 
import NewBeer from './components/NewBeer'
import RandomBeer from './components/RandomBeer'
//---REACT ROUTERS-//
import {Route, Switch} from 'react-router-dom'

class App extends React.Component {

  state = {
    beers: []
  }

  //GET THE DATA
  componentDidMount(){
    axios.get(`${API_URL}`)
      .then((res)=>{
        console.log(res)
        this.setState({          
          beers: res.data
        })
      })
  }

  //SUBMIT A NEW BEER
  handleSubmit = (event) => {
    event.preventDefault()
    const {name,tagline,description,first_brewed,brewers_tips,attenuation_level,contributed_by}=event.currentTarget

    axios.post(`${API_URL}/new`, {
      name: name.value,
      tagline: tagline.value,
      description: description.value,
      first_brewed: first_brewed.value,
      brewers_tips: brewers_tips.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value,
    })
    .then((res)=>{
      let newBeer = res.data
      let cloneBeers=JSON.parse(JSON.stringify(this.state.beers))
      cloneBeers.unshift(newBeer)
      this.setState({
        beers: cloneBeers
      },()=>{
        this.props.history.push('/')
      })
    })
      
  }
      

  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/beers" render={() => {
          return <AllBeers beers={this.state.beers}/>
        }} />

        <Route path="/beers/:beerId" component={BeerDetails}/>

        <Route path="/random-beer" component={RandomBeer}/>

        <Route path="/new-beer" render={() => {
           return <NewBeer onSubmit={this.handleSubmit}/> 
        }} />
        

      </Switch>
      </div>    
    )
  }
}

export default App
