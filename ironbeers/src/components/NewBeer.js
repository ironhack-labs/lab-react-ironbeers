import React from "react";
import { Header } from "../components/Header";
import axios from "axios";

export class NewBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', tagline:'', first_brewed: '', attenuation_level: '', description: '', contributed_by: '', brewers_tips: '', image_url: "https://images.punkapi.com/v2/4.png"};
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, tagline, first_brewed, attenuation_level, description, contributed_by, brewers_tips, image_url } = this.state
    axios.post("https://ironbeer-api.herokuapp.com/beers/new", { name, tagline, first_brewed, attenuation_level, description, contributed_by, brewers_tips, image_url })
    .then( () => {
      //  this.setState({name: '', tagline:'', first_brewed: '', attenuation_level: '', description: '', contributed_by: '', brewers_tips: '', image_url:"https://images.punkapi.com/v2/4.png"});
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
        <Header />
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>name</label>
            <input name="name" type="text" value={this.state.name} onChange={ e => this.handleChange(e)}></input>
            <label>tagline</label>
            <input name="tagline" type="text" value={this.state.tagline} onChange={ e => this.handleChange(e)}></input>
            <label>first_brewed</label>
            <input name="first_brewed" type="date" value={this.state.first_brewed} onChange={ e => this.handleChange(e)}></input>
            <label>attenuation_level</label>
            <input name="attenuation_level" type="number" value={this.state.attenuation_level} onChange={ e => this.handleChange(e)}></input>
            <label>description</label>
            <input name="description" type="text" value={this.state.description} onChange={ e => this.handleChange(e)}></input>
            <label>contributed_by</label>
            <input name="contributed_by" type="text" value={this.state.contributed_by} onChange={ e => this.handleChange(e)}></input>
            <label>brewer_tips</label>
            <input name="brewers_tips" type="text" value={this.state.brewers_tips} onChange={ e => this.handleChange(e)}></input>
            <input name="image_url" type="text" value="https://images.punkapi.com/v2/4.png"></input>

            <input type="submit" value="Submit"/>

          </form>
        </div>
      </div>
    );
  }
}
