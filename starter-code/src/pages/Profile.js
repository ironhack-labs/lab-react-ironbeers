import React, { Component } from 'react'
import {getUser, logout} from '../utils/auth'
import NavUser from '../components/NavUser'

export default class Profile extends Component {
   state = {
      user:{}
   }
   componentDidMount(){
      let userprofile = getUser()
      if (userprofile){
         this.setState({
            user:userprofile
         })
      } else {
         this.props.history.push('/login')
      }

   }
   logMeOut = () => {
      logout()
      this.props.history.push('/login')
   }
   render() {
      return (
         <div className='profile-container'>
            <NavUser
               username={this.state.user.username}
               logout={this.logMeOut}
            />
            <div className="user-profile">
               <h2>Welcome {this.state.user.firstname} {this.state.user.lastname}</h2>
               <h4>Email: {this.state.user.email}</h4>
            </div>
         </div>
      )
   }
}
