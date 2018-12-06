import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class NewBeer extends Component {

  constructor(props) {
    super(props);
    this.state = { name: "", tagline: "" , description: "",first_brewed:"",brewers_tips:"",attenuation_level:0,contributed_by:""}
  }

  handleFormSubmit =(event)=>{
     event.preventDefault();
     console.log(this.state,"DENTRO DEL SUBMIT");
     axios.post('https://ironbeer-api.herokuapp.com/beers/new',this.state)
     .then((resApi)=>{
        console.log(resApi);
     })
     .catch((error)=>{
        console.log(error);
     })
  }

  handleChange = (event) => { 
    console.log(event.target.name);
    console.log(event.target.value);
    const {name, value} = event.target;
    this.setState({[name]: value});
  }



  render() {
    return (
      <div>
        <Link to="/">HOME</Link>
        <form onSubmit={this.handleFormSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            <label>Tagline:</label>
            <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange}/>
            <label>description:</label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
            <label>first_brewed:</label>
            <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange}/>
            <label>brewers_tips:</label>
            <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange}/>
            <label>attenuation_level:</label>
            <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange}/>
            <label>contributed_by:</label>
            <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleChange}/>
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
