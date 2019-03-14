import React, { Component } from 'react';
import axios from 'axios';

class Newbeer extends Component {
  constructor(props){
      super(props);
      this.state = { name: "", tagline: "", description: "", first_brewed: "", brewers_tips: "", attenuation_level: "", contributed_by: ""};
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const tagline = this.state.tagline;
    const description = this.state.description;
    const first_brewed = this.state.first_brewed;
    const brewers_tips = this.state.brewers_tips;
    const attenuation_level = this.state.attenuation_level;
    const contributed_by = this.state.contributed_by;

    axios.post("https://ironbeer-api.herokuapp.com/beers/new", { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
    .then( () => {
        this.props.getData();
        this.setState({ name: "", tagline: "", description: "", first_brewed: "", brewers_tips: "", attenuation_level: "", contributed_by: ""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render(){
    return(

      <div class="field">
        <form onSubmit={this.handleFormSubmit}>
            <label class="label">Name</label>
                <div class="control">
                <input class="input" type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}></input>
                </div>
            <label class="label">Tagline</label>
                <div class="control">
                <input class="input" type="text" name="name" value={this.state.tagline} onChange={ e => this.handleChange(e)}></input>
                </div>
            <label class="label">Description</label>
                <div class="control">
                <input class="input" type="text" name="name" value={this.state.description} onChange={ e => this.handleChange(e)}></input>
                </div>
            <label class="label">First Brewed</label>
                <div class="control">
                <input class="input" type="text" name="name" value={this.state.first_brewed} onChange={ e => this.handleChange(e)}></input>
                </div>    
            <label class="label">Brewers tips</label>
                <div class="control">
                <input class="input" type="text" name="name" value={this.state.brewers_tips} onChange={ e => this.handleChange(e)}></input>
                </div>    
            <label class="label">Attenuation level</label>
                <div class="control">
                <input class="input" type="text" name="name" value={this.state.attenuation_level} onChange={ e => this.handleChange(e)}></input>
                </div>    
            <label class="label">Contributor</label>
                <div class="control">
                <input class="input" type="text" name="name" value={this.state.contributed_by} onChange={ e => this.handleChange(e)}></input>
                </div>        

                <div class="control"> 
                <button class="button is-link" type="submit" value="Submit">Submit</button>           
                </div> 
        </form>        

    </div>
    )
  }
}

export default Newbeer;