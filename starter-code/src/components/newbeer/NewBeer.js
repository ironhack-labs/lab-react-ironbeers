import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import './newbeer.css';

class NewBeer extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: ''
    };
}
 
handleFormSubmit = (event) => {
  event.preventDefault();
  axios.post("https://sample-api-ih.herokuapp.com/new", {
    name: this.state.name,
    tagline: this.state.tagline,
    description: this.state.description,
    first_brewed: this.state.first_brewed,
    brewers_tips: this.state.brewers_tips,
    attenuation_level: this.state.attenuation_level,
    contributed_by: this.state.contributed_by

    })
  .then( () => {
    this.history.push('home');
  })
  .catch( error => console.log(error) )
}

handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
}

render(){
  return(
    <div className="wrapper">
      <div>
      <Navbar />
      </div>
      <div className="new-beer-container">
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input className="input" type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          <label>Tagline:</label>
          <input className="input" type="text" name="tagline" value={this.state.tagline} onChange={ e => this.handleChange(e)} />
          <label>Description:</label>
          <textarea className="textarea" rows="6" name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          <label>First Brewed:</label>
          <input className="input" type="text" name="first_brewed" value={this.state.first_brewed} onChange={ e => this.handleChange(e)} />
          <label>Brewer's Tips:</label>
          <input className="input" type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={ e => this.handleChange(e)} />
          <label>Attenuation Level:</label>
          <input className="input" type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={ e => this.handleChange(e)} />
          <label>Contributed By:</label>
          <input className="input" type="text" name="contributed_by" value={this.state.contributed_by} onChange={ e => this.handleChange(e)} />
          <input className="button is-success" type="submit" value="Add Beer" />
        </form>
      </div>
    </div>
  )
}
}

export default NewBeer;