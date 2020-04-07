import React, { Component } from 'react'
import axios from 'axios'

export default class Profile extends Component {
   state = {
      profile:{
         name:''
      }
   }
   componentDidMount = () => {
      axios.get('https://ih-beers-api.herokuapp.com/user/profile')
      .then(response=>{
         this.setState({
            profile:response.data
         })
      })
      .catch(err=>console.log(err))
   }
   
   render() {
      return (
         <div>
            <h2>Welcome{this.state.profile.name}</h2>
         </div>
      )
   }
}
