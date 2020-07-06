import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


class App extends Component {

  state = {
    beers: [],
    onebeer: [],
    randombeer: []
  }

  async componentDidMount(){

    let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers') //All Beers
    console.log(res)

    this.setState({
      beers: res.data
    })
    let one = await axios.get ("https://ih-beers-api2.herokuapp.com/beers/5daf440ccbc5d2fd7d19ebe3") //One Beer
    console.log(one)

    this.setState({
      onebeer: one.data
    })

    let random = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random') //Random Beer

    console.log(random)

    
    // await axios.post(`https://ironrest.herokuapp.com/ironhackbeersstolen`, {beers: res.data})
  }

  showTheBeers = () => {
    // return [ {name:"Cat"} ,{name:"dog"}, {name:"mouse"}].map(eachanimal=>{
    //   return <li>{eachanimal.name}</li>
    // })
    
    return this.state.beers.map(eachanimal=>{
      return <li>{eachanimal.name}</li>
    })

  }
    
  showOneBeer = () => {

    return this.state.onebeer.name
  }



  render() {
    console.log(this)
    return (

      <div>
        <img src= {this.state.onebeer.image_url}/>
        one:{this.showOneBeer()}
        Name: {this.state.onebeer.name }
        Description: {this.state.onebeer.description}
        tagline: {this.state.onebeer.tagline}
        {this.showTheBeers()}
      </div>
    );
  }
}

export default App;
