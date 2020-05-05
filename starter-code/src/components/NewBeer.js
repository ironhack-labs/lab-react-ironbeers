import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import  {NavBar}  from './NavBar';



class NewBeer extends Component {
  constructor(props){
      super(props);
      this.state = { name: "", tagline: "", description: "", first_brewed: "", brewers_tips: "", attenuation_level: 0, contributed_by: "" };
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }
   
  handleFormSubmit(event) {
    event.preventDefault();
    const {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by
    } = this.state
   
   
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
    .then( () => {
        // this.props.getData();
        this.setState({ name: "", tagline: "", description: "", first_brewed: "", brewers_tips: "", attenuation_level: 0, contributed_by: "" });
        return <Redirect to='/' />
    })
    .catch( error => console.log(error) )
  }
 
  handleChange(event) {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

   
  
  render(){
    return(
   
      <div>
      <header>
                <NavBar />
            </header>
            <div style={{width: '40%', float:"left"}}> 
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>

          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={this.handleChange} />

          <label>Tagline:</label>
          <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange}/>

          <label>First Brewed:</label>
          <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange}/>

          <label>Brewers Tips:</label>
          <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange}/>

          <label>Attenuation Level:</label>
          <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange}/>

          <label>Contributed By:</label>
          <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleChange}/>
          <br/>
          <br/>
          <input type="submit" value="ADD NEW" />
        </form>
      </div>
      </div>
    )
  }
}
 
export default NewBeer;