import React, { Component } from 'react'
import {signup} from '../utils/auth'
import Nav from '../components/Nav'

export default class Signup extends Component {

   submitSignUp = () => {
      signup(this.state)
      .then(response=>{
         this.props.history.push('/login')
      })
      .catch(err=>console.log(err))
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
            <div className='signup-container'>
               <h3>Looking for cookies? Sorry, this is just the sign up page.</h3>
               <div className="signup-form">
                  <input type="text" required name="username" placeholder="Username" onChange={this.handleChange} />
                  <input type="text" required name="firstname" placeholder="First Name"  onChange={this.handleChange} />
                  <input type="text" name="lastname" placeholder="Second Name" onChange={this.handleChange} />
                  <input type="text" name="email" placeholder="Email Address" onChange={this.handleChange} />
                  <input type="password" required name="password" placeholder="Password" onChange={this.handleChange} />
                  <button onClick={this.submitSignUp}>Sign Up</button>
               </div>
            </div>
         </div>
      )
   }
}
