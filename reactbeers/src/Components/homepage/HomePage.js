import React, {Component} from "react";
import { Link } from "react-router-dom";
import AddBeer from "../addbeer/AddBeer";
import "../../App.css";
import axios from 'axios'
class HomePage extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    brewed: '',
    tips: '',
    attenuation: '',
    contributor: ''
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post("https://sample-api-ih.herokuapp.com/new", {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.brewed,
      brewers_tips: this.state.tips,
      attenuation_level: this.state.attenuation,
      contributed_by: this.state.contributor
      })
    .then( () => {
        this.setState({
          name: '',
          tagline: '',
          description: '',
          brewed: '',
          tips: '',
          attenuation: '',
          contributor: ''
        });
    })
    .catch( error => console.log(error) )
  }
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
    console.log('1')
}
  render(){
  return (
    <div className="App">
      <div className="conatainer">
        <div className="row">
          <div class="col s12 m7">
            <div class="card">
              <div class="card-image">
                <img src="/img/beers.png" alt="all-beers" />
                <span class="card-title">All Beers</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <Link activeclassname="active" exact to={`/allBeers`}>
                  Get all beers
                </Link>{" "}
              </div>
            </div>
          </div>
          <div class="col s12 m7">
            <div class="card">
              <div class="card-image">
                <img src="/img/random-beer.png" alt="random-beers" />
                <span class="card-title">Random Beer</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <Link activeclassname="active" exact to={`/randomBeer`}>
                  Get a random beer
                </Link>{" "}
              </div>
            </div>
          </div>
          <div class="col s12 m7">
            <div class="card">
            <div class="card-action">
              <div class="card-image">
                <img src="/img/new-beer.png" />
                <span class="card-title">New Beer</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
                <h6><span className="activator">Create a Beer</span></h6>
              </div>
              </div>
                <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Beer Form<i class="material-icons right">close</i></span>                
                <AddBeer handleSubmit={this.handleFormSubmit} handleChange={this.handleChange}/>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default HomePage;
