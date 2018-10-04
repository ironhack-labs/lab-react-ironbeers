import React, { Component } from 'react';
import Axios from "axios";

export default class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
    description: ""
  }
  
  submitForm = () => {
    Axios.post("https://ironbeer-api.herokuapp.com/beers/new",this.state)
    .then(e=>{
      console.log(e)
    })
    .catch(e=>console.log(e))
  }


  render() {
    let {name,tagline,first_brewed,brewers_tips,attenuation_level,contributed_by,description} = this.state
    return (
      <div style={{ textAlign: "center" }}>
        <hr />
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" value={name} onChange={e=> this.setState({name:e.currentTarget.value})}/>
        <hr />
        <label htmlFor="tagline">Tagline</label>
        <br />
        <input type="text" value={tagline} onChange={e=> this.setState({tagline:e.currentTarget.value})}/>
        <hr />
        <label htmlFor="first_brewed">First brewed</label>
        <br />
        <input type="text" value={first_brewed} onChange={e=> this.setState({first_brewed:e.currentTarget.value})}/>
        <hr />
        <label htmlFor="brewers_tips">Brewers tips</label>
        <br />
        <input type="text" value={brewers_tips} onChange={e=> this.setState({brewers_tips:e.currentTarget.value})}/>
        <hr />
        <label htmlFor="attenuation_level">Attenuation level</label>
        <br />
        <input type="text" value={attenuation_level} onChange={e=> this.setState({attenuation_level:e.currentTarget.value})}/>
        <hr />
        <label htmlFor="contributed_by">Contributed by</label>
        <br />
        <input type="text" value={contributed_by} onChange={e=> this.setState({contributed_by:e.currentTarget.value})}/>
        <hr />
        <label htmlFor="description">Description</label>
        <br />
        <textarea type="text" value={description} onChange={e=> this.setState({description:e.currentTarget.value})}/>
        <hr />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }
}