import React, { Component } from 'react'
// import axios from 'axios'
// import qs from 'qs'
import Nav from '../components/Nav'
import {login} from '../utils/auth'

export default class Login extends Component {
   state = {}
   submitLogin = () => {
      login(this.state)
      .then(response=>{
         this.props.history.push('/profile')
      })
   }
   handleChange = (e) => {
      this.setState({
         [e.target.name]:e.target.value
      })
   }
   render() {

      return (
         <div>
            <Nav/>
            <div className='login-container'>
               <h3>You again? Alright go ahead and log in...</h3>
               <div className="login-form">
                  <input type="text" name="username" required onChange={this.handleChange} placeholder='username'/>
                  <input type="password" name="password" required onChange={this.handleChange} placeholder='password' />
                  <button onClick={this.submitLogin}>Log In</button>
               </div>
            </div>
         </div>
      )
   }
}
