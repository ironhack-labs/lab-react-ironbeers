import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class NewBeer extends Component {

  constructor(props) {
    super(props);
    this.state = { name: "", tagline: "" , description: ""}
  }

  handleFormSubmit =(event)=>{
     event.preventDefault();
     const name= this.state.name;
     const tagline= this.state.tagline;
     const description= this.state.description;
     console.log(name,tagline,description);
     axios.post('https://ironbeer-api.herokuapp.com/beers/new',{name , tagline, description})
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
    console.log(this.state);
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
            <label>Description:</label>
            <textarea name="description" value={this.state.description} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
