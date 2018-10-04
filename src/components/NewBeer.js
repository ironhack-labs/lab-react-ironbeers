import React from 'react'
import Header from './Header';
import axios from 'axios'
import { Redirect } from "react-router-dom";
export default class NewBeer extends React.Component{
  constructor(){
    super()
    this.state={
      name:"",
      tagline:"",
      description:"",
      first_brewed:0,
      brewers_tips:"",
      attenuation_level:0,
      contributed_by:"",
      image:""
    }
  }
  createBeer=()=>{
    const {name,tagline,description,first_brewed,brewers_tips,attenuation_level,contributed_by,image}=this.state
    const beer={name,tagline,description,first_brewed,brewers_tips,attenuation_level,contributed_by,image}
    axios.post("https://ironbeer-api.herokuapp.com/beers/new",beer)
    .then(res => {
      console.log(res)
      return <Redirect to="/beers"></Redirect>
    })
    .catch(e=>console.log("Error",e))
  }
  render(){
    return (
      <div>
        <Header></Header>
        <label >Name</label>
        <input onChange={e=>this.setState({name:e.target.value})} value={this.state.name} type="text"/>
        <label >Tagline</label>
        <input onChange={e=>this.setState({tagline:e.target.value})} value={this.state.tagline} type="text"/>
        <label >Description</label>
        <textarea onChange={e=>this.setState({description:e.target.value})} value={this.state.description} type="text"/>
        <label >First Brewed</label>
        <input onChange={e=>this.setState({first_brewed:e.target.value})} value={this.state.first_brewed} type="date"/>
        <label >Brewers tips</label>
        <input onChange={e=>this.setState({brewers_tips:e.target.value})} value={this.state.brewers_tips} type="text"/>
        <label >Attenuation Level</label>
        <input onChange={e=>this.setState({attenuation_level:e.target.value})} value={this.state.attenuation_level} type="number"/>
        <label >Contributed By</label>
        <input onChange={e=>this.setState({contributed_by:e.target.value})} value={this.state.contributed_by} type="text"/>

        <button onClick={this.createBeer}>Add New</button>
      </div>
    )
  }
}