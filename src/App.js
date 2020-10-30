import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import MyNav from './components/MyNav'
import "./App.css"
import HomePage from './components/HomePage'
import Axios from 'axios'

export default class App extends Component {

  state = {
    beers: []
  }

  

  render() {
    return (
      <div>
        <MyNav />
        <HomePage />
      </div>
    )
  }
}
