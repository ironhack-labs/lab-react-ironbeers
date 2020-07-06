import React, { Component } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import '../App.css';

class NewBeer extends Component {

  state = {
    showForm: false,
  };

 
  toggleForm = () =>
  {
    this.setState({
        showForm: !this.state.showForm
    })
  }

  handleInputChange = (event) => {

      this.setState({
          [event.target.name]: event.target.value
      })
  }

  submitHandler = async (event) => {
    event.preventDefault()
    let res = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new',this.state);
    this.setState({
        showForm: false
    })
    console.log(res)
    }



render() {
    return (
      <div>
        <Header/>
        <button onClick={this.toggleForm}> New Beer</button>
        {this.state.showForm ?  
        
        <form method="post" onSubmit ={this.submitHandler}>
          <label for="beerName">Beer Name</label>
          <input onChange={this.handleInputChange} type="text" id="beerName" value={this.state.name} name="name" />
          <br/>
          <label for="tagLine">TagLine</label>
          <input onChange={this.handleInputChange} type="text" id="tagLine" name="tagline" />
          <br/>
          <label for="descr">Description</label>
          <input onChange={this.handleInputChange} type="text" id="descr" name="description" />
          <br/>
          <label for="first_brewed">First Brewed</label>
          <input onChange={this.handleInputChange} type="text" id="first_brewed" name="first_brewed" />
          <br/>
          <label for="brewers_tips">Brewers Tips</label>
          <input onChange={this.handleInputChange} type="text" id="brewers_tips" name="brewers_tips" />
          <br/>
          <label for="att_level">Attenuation Level</label>
          <input onChange={this.handleInputChange}type="number" id="att_level" name="attenuation_level" />
          <br/>
          <label for="contributed_by">Contributed by</label>
          <input onChange={this.handleInputChange} type="text" id="contributed_by" name="contributed_by" />
          <br/>
          <input  type="submit" value="Submit" />
        </form>: "" }
      </div>
    );
}
}

export default NewBeer;