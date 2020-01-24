
import React, { Component } from 'react';
import Axios from 'axios';

class NewBeer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submitting')
    Axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
    .then( () => {
      this.props.history.push('/')
    })
    .catch( error => console.log(error) )
  }

  render(){
    console.log(this.props);
    return(
      <div>
      <NavBar/>
      <div className="allBeersContainer">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input onChange={this.handleChange} type="text" name="name"/>
          
          <label htmlFor="tagline">Tagline</label>
          <input onChange={this.handleChange} type="text" name="tagline"/>
          
          <label htmlFor="description">Description</label>
          <textarea onChange={this.handleChange} name="description" id="description" cols="30" rows="10"></textarea>

          <label htmlFor="first_brewed">First Brewed</label>
          <input onChange={this.handleChange} type="text" name="first_brewed"/>

          <label htmlFor="brewers_tips">Brewer's Tips</label>
          <input onChange={this.handleChange} type="text" name="brewers_tips"/>

          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input onChange={this.handleChange} type="number" name="attenuation_level"/>

          <label htmlFor="contributed_by">Contributed By</label>
          <input onChange={this.handleChange} type="text" name="contributed_by"/>
          <button>Submit</button>
        </form>
      </div>
      </div>
    )
  }
}

export default NewBeer;
