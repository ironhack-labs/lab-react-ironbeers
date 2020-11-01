import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home'
import Beers from './components/Beers'
import NewBeer from './components/NewBeer'
import RandomBeer from './components/RandomBeer'
import NaviBar from './components/NaviBar'
import BeerDetail from './components/BeerDetail'

import axios from 'axios'





class App extends Component {


state = {
  beers: []
}

//I am fetching my data from the beer API
componentDidMount() {
  axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => {
      // console.log("response.data is: ", response.data)

        this.setState({
          beers: response.data
        })
    })
}

addBeer = (e) => {
  e.preventDefault()
  console.log(e.target)
   const { name, tagline, decription, firstBrewed, brewersTips, attenuationLevel, contributedBy} = e.target


   let newBeer = {
    name: name.value, 
    tagline: tagline.value, 
    decription: decription.value, 
    firstBrewed: firstBrewed.value, 
    brewersTips: brewersTips.value, 
    attenuationLevel: attenuationLevel.value, 
    contributedBy: contributedBy.value
   }

   //make a post request because we are sending the form's information
   axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
   .then((response ) => {
     this.setState({
      beers: [ response.data, ...this.state.beers]
     }, // then you redirect the user to the home page
    //  () => { 
    //   this.props.history.push('/')
    // }
    )
   })
}





  render() {
    return (
      <div>
        <NaviBar/>
      <Switch>
        <Route exact path='/' render = {() => {
                return <Home /> }} />       
          {/* <Route exact path="/beers" component={Beers} /> */}
          <Route exact path="/beers" render={() => {
            return <Beers singleBeer={this.state.beers}/> //here it will render the component with the props (the state)
          }}/>

          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" render={() => {
            return <NewBeer onAdd={this.addBeer} /> }}/>
          <Route exact path="/beers/:beerId" render = {(props) => {
                return <BeerDetail {...props}/> }} />  

      </Switch>
      </div>
    )
  }
}


export default App



