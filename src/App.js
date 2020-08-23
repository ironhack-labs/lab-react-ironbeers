import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import NavBar from './components/NavBar'
import BeerList from './components/BeerList'
import {API_URL} from './config'
import axios from 'axios'
import BeerDetails from './components/BeerDetails'
import NewBeer from './components/NewBeer'

class App extends Component {

  state={
    beers:[]
  }

  componentDidMount(){
    axios.get(`${API_URL}`)
      .then((res)=>{
        // console.log (res.data)
        this.setState({beers: res.data}, ()=>console.log(this.state.beers))
      })
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = event.currentTarget;
    axios.post(`${API_URL}/new`,{
        name: name.value,
        tagline: tagline.value,
        description: description.value,
        first_brewed: first_brewed.value,
        brewers_tips: brewers_tips.value,
        attenuation_level: attenuation_level.value,
        contributed_by: contributed_by.value
      })
      .then((newBeer)=>{
        let cloneBeers= JSON.parse(JSON.stringify(this.state.beers))
        cloneBeers.unshift(newBeer.data)
        this.setState({beers: cloneBeers}, ()=>{this.props.history.push('/')})
      })
    }

  render(){
    return (
      <div className="App">
      <NavBar />
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route path='/beers' render={()=>{return <BeerList beers={this.state.beers}/>}}/>
          <Route path='/beer/:id' render={(routeProps)=>{return <BeerDetails beers={this.state.beers} {...routeProps}/>}}/>
          <Route path='/new-beer' render={(routerProps)=>{return <NewBeer onSubmit={this.handleSubmit} {...routerProps}/>}}/>
        </Switch>
      </div>
    );
    }
  }

export default App;
