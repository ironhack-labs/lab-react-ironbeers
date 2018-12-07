import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";

export default class NewBeer extends Component {
  constructor(){
    super()

    this.ok = '';

    this.state = {
      
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: ''
      
      
    }

    

  }

  handleInput = (event) => {
    
    this.setState({[event.target.name]:event.target.value})
  }

  handlePost = () => {
    axios.post(`https://ironbeer-api.herokuapp.com/beers/new`, this.state)
    .then(res => {
      console.log(res);
      this.ok = 'OK'
      this.setState({beer : {}})
      
    }).catch(e => console.log(e))
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <form type="submit">
          <input type="text" name="name" placeholder="name" onChange={(e) => this.handleInput(e)}/>
          <input type="text" name="tagline" placeholder="tagline" onChange={(e) => this.handleInput(e)}/>
          <input type="text" name="description" placeholder="description" onChange={(e) => this.handleInput(e)}/>
          <input type="text" name="first_brewed" placeholder="first_brewed" onChange={(e) => this.handleInput(e)}/>
          <input type="text" name="brewers_tips" placeholder="brewers_tips" onChange={(e) => this.handleInput(e)}/>
          <input type="number" name="attenuation_level" placeholder="attenuation_level" onChange={(e) => this.handleInput(e)}/>
          <input type="text" name="contributed_by" placeholder="contributed_by" onChange={(e) => this.handleInput(e)}/>
          <input className="" type="submit" value="Submit" onClick={this.handlePost}/>
        </form>
        <h1>{this.ok}</h1>
      </div>
    );
  }
}
