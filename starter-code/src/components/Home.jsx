import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, withRouter, Link } from 'react-router-dom';


 class Home extends Component {
  render() {
    return (
      <div  style={{display:'flex', justifyContent:'center'}}>
    <Link to="/beers">Beers</Link>|
    <Link to="/new-beer">New Beer</Link>|
    <Link to="/random-beer">Random Beer</Link>
      </div>
    )
  }
}

export default Home

