import axios from "axios";
import React, { Component } from "react";


class newBeer extends Component {

    state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",    
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: ""

    }



    handleInput = (event) => {
        let { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = event.target;  
    


    
        this.setState( { [name]: event.target.value }  )
      }


    
      handleSubmit = (event) => {

        event.preventDefault();

    let { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state
      const data = {
    name: name,
    tagline: tagline,
    description: description,
    first_brewed: first_brewed,    
    brewers_tips: brewers_tips,
    attenuation_level: attenuation_level,
    contributed_by: contributed_by

  }
      
  axios
  .post("https://ih-beers-api2.herokuapp.com/beers/new", data)
  .then(res => console.log(res))
  .catch(err => console.log(err));

  
this.setState({name: '', tagline: '', description: ``, first_brewed: ``, brewers_tip: ``,  attenuation_level: 0,
        contributed_by: ``})
}
    
    render() {
        return (
            <div>
         <form onSubmit={this.handleSubmit}>
          <h2>Add a beer:</h2>
          <br />
          
          <label>Name:</label>
          <input 
            type="text" 
            name="name"
            value={this.state.name} 
            onChange={this.handleInput} 
          />
          
          <br />
          
          <label>Tagline:</label>
          <input 
            type="text" 
            name="tagline" 
            value={this.state.tagline} 
            onChange={this.handleInput}/>
          <br />
          
          <label>Description:</label>
          <input 
            type="text" 
            name="description" 
            checked={this.state.description} 
            onChange={this.handleInput}
            />
          <br />
          
          <label>First Brewed</label>
          <input 
            type="text" 
            name="first_brewed" 
            value={this.state.first_brewed} 
            onChange={this.handleInput}/>

          <br/>

          <label>Brewers Tip</label>
          <input 
            type="text" 
            name="brewers_tip" 
            value={this.state.brewers_tip} 
            onChange={this.handleInput}/>

          <br/>

          <label>Attenuation Level</label>
          <input 
            type="number" 
            name="attenuation_level" 
            value={this.state.attenuation_level} 
            onChange={this.handleInput}/>

          <br/>

          <label>Contributed By</label>
          <input 
            type="text" 
            name="contributed_by"
            value={this.state.contributed_by} 
            onChange={this.handleInput}/>

          <br/>

          <button type="submit">Create</button>
        </form>    
            </div>
        )
    }
}


export default newBeer;

