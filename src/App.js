
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Switch, Route, Link, withRouter} from 'react-router-dom'
import AllBeers from './components/AllBeers'
import Home from './components/Home';
import Axios from 'axios';
import RandomBeer from './components/RandomBeer'
import React, { Component } from 'react'
import BeerDetail from './components/BeerDetail';
import AddBeers from './components/AddBeers'

class App extends Component {


  state={
    beers: [],
  }

  componentDidMount(){
    Axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response)=>{
        // console.log('RESPONSE',response.data)
        this.setState({
          beers: response.data
        })

      })
  }

    handleAdd = (e) =>{
      e.preventDefault()

      console.log(e.target)
      const{name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = e.target
      let newBeer = {
        name: name.value,
        tagline: tagline.value,
        description: description.value,
        first_brewed: first_brewed.value,
        brewers_tips: brewers_tips.value,
        attenuation_level: attenuation_level.value,
        contributed_by: contributed_by.value,
      }

      Axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
        .then((res)=>{

            console.log(res)
        }, ()=>{
          
        })
    }

  render() {
    return (
      <div>
      <Link to ='/'>
                <div className="container1">
                    <img src="../home.png" alt ="home"/>
                </div>
            </Link>
        <Switch>
      <Route  exact path='/' component = {Home}/>
      <Route  path="/beers" render={()=>{
        return <AllBeers Allbeers={this.state.beers} /> 
      } } />
      <Route exact path="/beer/:beerId" render={(props)=>{
        return <BeerDetail {...props} />
      }} />
      <Route path="/random-beer" component={RandomBeer}/>
          <Route path="/new-beer" render={()=>{
        return <AddBeers onAdd = {this.handleAdd}/>
      }} />
      </Switch>
      </div>
    )
  }
}




export default  withRouter(App);
