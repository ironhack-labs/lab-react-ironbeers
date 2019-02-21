import React, { Component } from 'react';
import axios from 'axios';


class newBeer extends Component {

  constructor(props){
      super(props);
      this.state = { 
        name: '',
        tagline:'',
        first_brewed: '',
        description: '',
        image_url: '',
        brewers_tips: '',
        contributed_by: '',
        attenuation_level: 0
      }
      this.handleNameInput = this.handleNameInput.bind(this);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();  
    console.log('This State', this.state)
    axios.post('https://ironbeer-api.herokuapp.com/beers/new', this.state)
    .then(response => {
      console.log('This State', this.state)
    })
  }

  handleNameInput = (event) => {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    }, () => console.log(this.state) )
  }


render() { 
    return (   
      <div>
      <form onSubmit={this.handleFormSubmit}>
        <label>Name</label><br/> 
        <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleNameInput(e)} /><br/> 
     
        <label>Tagline</label><br/> 
        <input name="tagline" type="text" value={this.state.calories} onChange={(e) => this.handleNameInput(e)} /><br/> 

        <label>First Brewed</label><br/> 
        <input name="first_brewed" type="text" value={this.state.calories} onChange={(e) => this.handleNameInput(e)} /><br/> 

        <label>Description</label><br/> 
        <input name="description" type="text" value={this.state.calories} onChange={(e) => this.handleNameInput(e)} /><br/> 

        <label>Image</label><br/> 
        <input name="image_url" type="text" value={this.state.image} onChange={(e) => this.handleNameInput(e)} /><br/> 
        
        <label>Brewers Tips</label><br/> 
        <input name="brewers_tips" type="text" value={this.state.calories} onChange={(e) => this.handleNameInput(e)} /><br/> 
        
        <label>Contributed By</label><br/> 
        <input name="contributed_by" type="text" value={this.state.calories} onChange={(e) => this.handleNameInput(e)} /><br/>

        <label>Attenuation Level</label><br/> 
        <input name="attenuation_level" type="text" value={this.state.calories} onChange={(e) => this.handleNameInput(e)} /><br/> 

        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
};

export default newBeer;