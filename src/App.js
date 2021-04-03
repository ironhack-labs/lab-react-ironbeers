import React from 'react'

import {Component} from 'react'


//components
import Navbar from './components/Navbar/Navbar'
import Router from './components/Router/Router'

import './App.css'


const axios = require('axios');


class App extends Component {

  state = {
    loading: true,
    beersData: null
  }

  componentDidMount() {  
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then( response => {
        this.setState({
            beersData: response.data,
            loading: false
          })
        })
      .catch( error => console.log(error))
  }
  
  render() {
    return (
      <div className="App">
        <header className="">
          <Navbar/>
        </header>
        <main>
          <Router beersData={this.state.beersData} loading={this.state.loading}/>
        </main>
        <footer>
      
        </footer>
      </div>
    )
  }
}

export default App;
