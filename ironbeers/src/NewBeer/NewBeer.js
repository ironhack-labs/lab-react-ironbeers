import React, { Component } from 'react';
import axios from 'axios';
import Link from "react-router-dom/Link";
import Nav from "../Navbar/Nav.js";

class AddBeer extends Component {
  constructor(props){
      super(props);
      this.state = { name: "", description: "" };
  }
   
  beerFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const description = this.state.description;
    const body = {name, description};
    axios.post(`https://ironbeer-api.herokuapp.com/beers/new`, body)
    .then( () => {
        this.props.getData();
        this.setState({name: "", description: ""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render(){
    return(
      <div className="add-project">
        <form onSubmit={this.beerFormSubmit}>
          <label>name:</label>
          <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddBeer;
