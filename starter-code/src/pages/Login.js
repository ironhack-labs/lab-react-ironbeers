import React, { Component } from 'react'
import axios from 'axios'
import qs from 'qs'
import Nav from '../components/Nav'

export default class Login extends Component {

   submitLogin = () => {
      axios({
         method:'post',
         url:'https://ih-beers-api.herokuapp.com/auth/login',
         data:qs.stringify(this.state),
         headers: {
            "content-type":"application/x-www-form-urlencoded"
         }
      })
      .then(response=>{
         console.log(response.data)
         axios.get('https://ih-beers-api.herokuapp.com/user/profile')
         .then(response=>{
            console.log(response.data)
         })
         .catch(err=>console.log(err))
         // this.props.history.push('/profile')         
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
