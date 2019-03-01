import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom'
import Routes from './Routes';
import axios from 'axios'
const endpoint = 'https://ironbeer-api.herokuapp.com/beers/all'



class App extends Component {
    state={
      beers:[]
  }

  componentWillMount(){
  axios.get(endpoint)
  .then(res=>{
    this.setState({beers: res.data})
  })
  .catch(e=>console.log(e))

  }
  render() {
    const { beers } = this.state
    if (beers.length  === 0) return <div>Loading...</div>
    // console.log(beers)
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink>
          {'|'}
          <NavLink to="/signup">Sign up!</NavLink>
          {'|'}
          <NavLink to="/login">Log in</NavLink>
        </nav>
        <button onClick={()=>{
            axios.get('http://localhost:3000/logout',{withCredentials:true})
          }}> logout 
          </button>
        <Routes beers={beers}/>
      </div>
    );
  }
}

export default App;
