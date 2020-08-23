import React, { Component } from 'react'
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import {API_URL} from './config'
import Home from './components/Home';
import axios from 'axios';
import AllBeers from './components/AllBeers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';


 class App extends Component {

  state={
    beers: []
  }

  componentDidMount(){
    axios.get(`${API_URL}`)
      .then((res)=>{
        this.setState({
          beers: res.data
          
      })
    })
  }

  
  handleSubmit=(e)=>{
    e.preventDefault()
    const {name,tagline,description,first_brewed,brewers_tips,attenuation_level,contributed_by}=e.currentTarget

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
      //here we add the new todo to the state of todos.
      let newBeer = res.data
      let cloneBeers=JSON.parse(JSON.stringify(this.state.beers))
      cloneBeers.unshift(newBeer)
      this.setState({
        beers: cloneBeers
      },()=>{
         //this is how we redirect to the main page.
        this.props.history.push('/beers')
      })
    })
  }
  

  render() {
    return (
      <div>
        <Route exact path="/" render={(routeProps)=>{
                    return <Home {...routeProps}/>
                }}/>
        <Route exact path="/beers" render={(routeProps)=>{
                    return <AllBeers beers={this.state.beers} {...routeProps}/>
                }}/>
        <Route path="/beers/:id/details" render={(routeProps)=>{
                    return <BeerDetails beers={this.state.beers} {...routeProps}/>
                }}/>
        <Route path="/random-beer" render={(routeProps)=>{
                    return <RandomBeer beers={this.state.beers} {...routeProps}/>
                }}/>
        <Route path="/new-beer" render={(routeProps)=>{
                    return <NewBeer onSubmit={this.handleSubmit} {...routeProps}/>
                }}/>
      </div>
    )
  }
}

export default withRouter(App)