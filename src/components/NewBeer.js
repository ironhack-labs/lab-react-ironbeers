import React, { Component } from 'react';
import Navbar from './Navbar';

class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
      };

    handleFormSubmit = (event) => {
      event.preventDefault();
        // const name = this.state.name;
        // const tagline = this.state.tagline;
        // const description = this.state.description;
        // const first_brewed = this.state.first_brewed;
        // const brewers_tips = this.state.brewers_tips;
        // const attenuation_level = this.state.attenuation_level;
        
        console.log(this.state, 'antes')

        this.props.addTheBeer(this.state)

        this.setState({name: "",tagline: "",  description: "", first_brewed: '',brewers_tips: '', attenuation_level: ''});
    };
  
    handleChange = (event) => {
      let { name, value } = event.target
      this.setState({ [name]: value})
    };
  
    render() {
      return (
          <>
            <Navbar />
            <div className="containerform">
            <form onSubmit={this.handleFormSubmit}>
                <label>Name:</label><br/>
                <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/><br/>
                
                <label>Tagline:</label><br/>
                <input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)}/><br/>

                <label>Description:</label><br/>
                <textarea type="text" name="description" value={this.state.description} className="textarea" onChange={(e) => this.handleChange(e)}/><br/>

                <label>First Brewed:</label><br/>
                <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleChange(e)}/><br/>

                <label>Brewers Tips:</label><br/>
                <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleChange(e)}/><br/>

                <label>Attenuation Level:</label><br/>
                <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)}/><br/>

                <input type="submit" value="Add NEW"/>
            </form>
            </div>
          </>
    );
    }
  }
  
  export default NewBeer;