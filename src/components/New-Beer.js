import React from 'react'
import HomeLink from './HomeLink';
import BeerService from '../BeerService'
import '../styles/form.css';

export default class Allbeers extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      beer: [],
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: ""


    }
    this.beerService = new BeerService();
    this.getBeer();
  }

  getBeer = () => {
    this.beerService.getBeer()
      .then(beers => {
        this.setState({ ...this.state, beer: beers })
      })
      .catch(err => console.log(err))
  }

  handlerSubmit = e => {
    e.preventDefault();
    let { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
    this.beerService.newBeer({ name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
      .then(response => {
        this.setState({
          ...this.state,
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: "",
          contributed_by: ""
        }, () => {
          this.getBeer();
        })
      })

  }

  handlerChange = e =>{
    let inputName=e.target.name; 
    let inputValue=e.target.value;
    this.setState({...this.state,[inputName]:inputValue})
  }

  render() {
    return (
      <div>
        <HomeLink />
        <h1>New Beer</h1>
        <form id="form" onSubmit={e => this.handlerSubmit(e)}>
          <label for="name" >Name</label>
          <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={e => this.handlerChange(e)} />
          <input type="text" placeholder="Tagline" value={this.state.tagline} name="tagline" onChange={e => this.handlerChange(e)} />
          <textarea placeholder="Description" value={this.state.description} name="description" onChange={e => this.handlerChange(e)} />
          <input type="text" placeholder="First_brewed" value={this.state.first_brewed} name="first_brewed" onChange={e => this.handlerChange(e)} />
          <input type="text" placeholder="Brewers_tips" value={this.state.brewers_tips} name="brewers_tips" onChange={e => this.handlerChange(e)} />
          <input type="number" min="1" placeholder="Attenuation_level" value={this.state.attenuation_level} name="attenuation_level" onChange={e => this.handlerChange(e)} />
          <input type="text" placeholder="Contributed_by" value={this.state.contributed_by} name="contributed_by" onChange={e => this.handlerChange(e)} />
          <button type="submit">New Beer</button>
        </form>
      </div>
    )
  }
}
