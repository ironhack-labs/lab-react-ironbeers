import React, { Component } from 'react';
import './App.css';
import {NavLink} from 'react-router-dom';
import {Route} from 'react-router-dom';
import beers from './components/beers'


class App extends Component {
  state = {
    auth: {},
    isLogged : true
  }
  render(){
    return (
      <div>
        <nav>
          <NavLink to ="/beers">
           All beers
          </NavLink>
          <NavLink to ="/randombeer">
           Random beer
          </NavLink>
          <NavLink to ="/beers">
           Delete
          </NavLink>
          </nav>
          <Route exact path="/beers" component = {beers}/>
          </div>
    )
  }

  // sendToServer = () => {
  //   let {auth} = this.state
  //   let url = 'http://localhost:3000/login'
  //   axios.post
  // }

  // render() {
  //   if (this.state.isLogged ){
  //     return (
  //       <div>
  //       <nav>
  //         <NavLink to ="/beers">
  //          All beers
  //         </NavLink>
  //         <NavLink to ="/randombeer">
  //          Random beer
  //         </NavLink>
  //         <NavLink to ="/beers">
  //          Delete
  //         </NavLink>
  //         <NavLink to ="/">
  //          Logout
  //         </NavLink>
  //         </nav>
  //         </div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //       <nav>
  //         <NavLink to ="/login">
  //          Login
  //         </NavLink>
  //         <NavLink to ="/signup">
  //          Signup
  //         </NavLink>
  //         <NavLink to ="/">
  //          Home
  //         </NavLink>
  //         </nav>
  //         </div>
  //     )
  //   };
    
  // }  
  };

export default App;
