import React, { Component } from 'react'
import Header from './Header';
import axios from 'axios';
export default class NewBeer extends Component {

  constructor(props){
    super(props);
    this.state= {
      name:'',
      tagline:'',
      description:'',
    }
  }

inputHandler=(e)=>{
    this.setState({
      [e.target.name]: e.target.value,
    })
}

addBeer=(e)=>{
  e.preventDefault()
  const newBeer = {
    name: this.state.name,
    tagline: this.state.tagline,
    description: this.state.tagline,
  }

  axios.post('https://ih-beer-api.herokuapp.com/beers/new',newBeer)
  .then(response=>this.props.history.push('/') )
  .catch(err=>console.log('error'))
}

  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.addBeer} action="" method="posts">
          <legend>Name</legend>
          <input onChange={this.inputHandler} type="text" name="name" value={this.state.name} id="name"/>
          <legend>Tagline</legend>
          <input onChange={this.inputHandler} type="text" name="tagline"  value={this.state.tagline} id="tagline"/>
          <legend>Description</legend>
          <input onChange={this.inputHandler} type="text" name="description"  value={this.state.description} id="description"/>
          <button>Add Beer</button>
        </form>
      </div>
    )
  }
}
