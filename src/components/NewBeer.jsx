import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

class NewBeer extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    }
  }

  handleInput(e){
    let {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event){
    const newBeer = this.state
    axios.post('https://ih-beer-api.herokuapp.com/beers/new', newBeer )
    .then(response => {
      this.setState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
      })

      console.log( "New beer successfully saved to database!")
    })
    .catch(err => console.log(err));

    event.preventDefault();
  }

  render(){
    return(
      <div>
      <NavBar/>
        <form onSubmit = {(event) => this.handleSubmit(event)}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleInput(e)}/>
          <label>Tagline:</label>
          <input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleInput(e)}/>
          <label>Description:</label>
          <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleInput(e)}/>
          <label>First Brewed:</label>
          <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleInput(e)}/>
          <label>Attenuation Level:</label>
          <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleInput(e)}/>
          <label>Contributed:</label>
          <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleInput(e)}/>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default NewBeer;