import React, { Component } from 'react'
import axios from 'axios'
import qs from 'qs'
import Nav from '../components/Nav'

export default class Signup extends Component {

   submitSignUp = () => {
      axios({
         method:'post',
         url:'https://ih-beers-api.herokuapp.com/auth/signup',
         data:qs.stringify(this.state),
         headers: {
            "content-type":"application/x-www-form-urlencoded"
         }
      })
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
