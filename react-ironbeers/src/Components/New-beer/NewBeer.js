import React, { Component } from 'react';
import { Link ,Redirect} from "react-router-dom";
import axios from "axios";


export default class NewBeer extends Component {
  constructor(){
    super()
    this.state = {
      name:'',
      tagline:'',
      description:'',
      first_brewed:'',
      brewed_tips:'',
      attenuation_level:'',
      contributed:''
    }
  }
  handleFormSubmit=(e)=>{

    e.preventDefault();
    axios.post("https://ironbeer-api.herokuapp.com/beers/new", this.state)
    .then( () => {
      return <Redirect to="/"/>
    })
    .catch( error => console.log(error) )

  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
}

  render() {
    return (
      
      
      <div>
      <div><Link to={`/`}>Home</Link></div>
      <form onSubmit={this.handleFormSubmit}>
        <input type="text" placeholder="Name" name="name" onChange={ e => this.handleChange(e)}></input>
        <br></br>
        <input type="text" placeholder="Tagline" name="tagline" onChange={ e => this.handleChange(e)}></input>
        <br></br>
        <input type="text" placeholder="Description" name="description" onChange={ e => this.handleChange(e)}></input>
        <br></br>
        <input type="text" placeholder="First Brewed" name="first_brewed" onChange={ e => this.handleChange(e)}></input>
        <br></br>
        <input type="text" placeholder="Brewed Tips" name="brewed_tips" onChange={ e => this.handleChange(e)}></input>
        <br></br>
        <input type="text" placeholder="Attenuation Level" name="attenuation_level" onChange={ e => this.handleChange(e)}></input>
        <br></br>
        <input type="text" placeholder="Contributed By" name="contributed" onChange={ e => this.handleChange(e)}></input>
        <br></br>
        <button type="submit">ADD NEW</button>
      </form>
      </div>
    )
  }
}
