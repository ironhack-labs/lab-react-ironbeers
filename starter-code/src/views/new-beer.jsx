import React, { Component } from "react";
import Axios from "axios";

export default class favoriteBeers extends Component {
  state = {
    newBeer: "",
    name: "",
    image_url: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  };

  sendTheForm = (values) => {
// Verifier que le form n'est pas vide
    Axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`,values ).then(res => {console.log(res);console.log(res.data)}).catch(err=>console.log(err))
}

  formCliked = e => {
    if (e.target.name === "name") this.setState({name:e.target.value});
    if (e.target.name === "tagline") this.setState({tagline:e.target.value});
    if (e.target.name === "description") this.setState({description:e.target.value});
    if (e.target.name === "first_brewed") this.setState({first_brewed:e.target.value});
    if (e.target.name === "brewers_tips") this.setState({brewers_tips:e.target.value});
    if (e.target.name === "image_url") this.setState({image_url:e.target.value.lenght<5 ? e.target.value: "https://images.interdrinks.com/v5/img/p/2488-3693-w786-h540-transparent.png"});
    if (e.target.name === "attenuation_level")
    this.setState({attenuation_level:e.target.value});
    if (e.target.name === "contributed_by")
    this.setState({contributed_by:e.target.value});

    this.setState({newBeer: {
        name:this.state.name,
        tagline:this.state.tagline,
        description:this.state.description,
        first_brewed:this.state.first_brewed,
        brewers_tips:this.state.brewers_tips,
        attenuation_level:this.state.attenuation_level,
        contributed_by:this.state.contributed_by,
        image_url:this.state.image_url,
    }},()=>console.log(this.state.newBeer))

  };



  render() {
    return (<>
    <div>
      <div onInput={e => this.formCliked(e)} className="field" action="">
        <label className="label">name</label>
        <input name="name" type="text" className="input" />
        <label className="label">image_url</label>
        <input name="image_url" type="text" className="input" />
        <label className="label">tagline</label>
        <input name="tagline" type="text" className="input" />
        <label className="label">description</label>
        <textarea name="description" type="text" rows="5"  className="input"></textarea>
        <label className="label">first_brewed</label>
        <input name="first_brewed" type="text" className="input" />
        <label className="label">brewers_tips</label>
        <input name="brewers_tips" type="text" className="input" />
        <label className="label">attenuation_level</label>
        <input name="attenuation_level" type="number" className="input" />
        <label className="label">contributed_by</label>
        <input name="contributed_by" type="text" className="input" />
      </div>
        <button className="button" onClick={()=>this.sendTheForm(this.state.newBeer)}>Send the beer</button>
        </div>
{this.state.newBeer ? 
<div className="beer-box">
<img src={this.state.newBeer.image_url} alt="beer"/>
<p>{this.state.newBeer.image_url}   </p>
  <h2 className="name">
    {this.state.newBeer.name}
  </h2>
  <h3 className="tagline">
    {this.state.newBeer.tagline}
  </h3>
  <p>{this.state.newBeer.first_brewed}</p>
  <p>{this.state.newBeer.brewers_tips}</p>
  <p>{this.state.newBeer.attenuation_level}</p>
  <p>{this.state.newBeer.description}</p>
  <p>{this.state.newBeer.contributed_by}</p>
  </div>

  : <h1>Complete the form please</h1>
   }</>);
  }
}
