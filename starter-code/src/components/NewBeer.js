import NavBar from '../components/NavBar'
import React, { Component } from 'react'
import axios from "axios";


class NewBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name: "", 
            description: "",
            tagline: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: "",
            contributed_by: ""
        };
      }
    
      handleFormSubmit = event => {
        event.preventDefault();
        const {name, description, tagline, first_brewed, brewers_tips, attenuation_level, contributed_by} = this.state;
        
        axios
          .post("https://ih-beers-api2.herokuapp.com/beers/new", { name, description })
          .then(() => {
            this.setState({ name: "", description: "" });
          })
          .catch(error => console.log(error));
      };
    
      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    
      render() {
        return (
            <div>
            <NavBar />
          <div className="form">
            <form onSubmit={this.handleFormSubmit}>
              <label>Title:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
              />
              <label>Description:</label>
              <textarea
                name="description"
                value={this.state.description}
                onChange={e => this.handleChange(e)}
              /> 
             <label>tagline:</label>
               <input
                type="text"
                name="tagline"
                value={this.state.tagline}
                onChange={e => this.handleChange(e)}
              />
               <label>first_brewed:</label>
              <input
                type="text"
                name="first_brewed"
                value={this.state.first_brewed}
                onChange={e => this.handleChange(e)}
              /> 
              <label>brewers_tips:</label>
              <input
                type="text"
                name="brewers_tips"
                value={this.state.brewers_tips}
                onChange={e => this.handleChange(e)}
              /> 
              <label>attenuation_level:</label>
              <input
                type="text"
                name="attenuation_level"
                value={this.state.attenuation_level}
                onChange={e => this.handleChange(e)}
              />
              <label>contributed_by:</label>
              <input
                type="text"
                name="contributed_by"
                value={this.state.contributed_by}
                onChange={e => this.handleChange(e)}
              />

    
              <a href="/AllBeers"><input type="submit" value="Submit" />Go back</a>
            </form>
          </div>
          </div>
        );
      }
    }

export default NewBeer