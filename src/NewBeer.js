import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import './NewBeer.css';

export default class NewBeer extends Component {
  constructor(){
    super();
    this.state = {
      "name": "",
      "tagline": "", 
      "imageUrl": "", 
      "contributedBy": "",
      redirect: false
    }
  }

  handleField(e, field){
    const state = {...this.state};
    state[field] = e.target.value;

    this.setState({
      ...state
    });
  }

  sendForm(e){
    e.preventDefault();
    axios.post('http://localhost:5000/new', 
      {
        "name": this.state.name,
        "tagline": this.state.tagline, 
        "imageUrl": this.state.imageUrl, 
        "contributedBy": this.state.contributedBy
      }
    )
    .then(() => this.setState({...this.state, redirect: true}))
    .catch(err => console.log(err))
  }
  
  render() {
    const {redirect} = this.state;

    if(redirect){
      return <Redirect to='/beers'/>;
    }

    return (
      <form className="NewBeer">
        <label htmlFor="name">Name</label>
        <input type="text" value={this.state.name} onChange={(e)=>this.handleField(e, 'name')}/>
        <label htmlFor="tagline">Tagline</label>
        <input type="text" value={this.state.tagline} onChange={(e)=>this.handleField(e, 'tagline')}/>
        <label htmlFor="imageUrl">Image url</label>
        <input type="text" value={this.state.imageUrl} onChange={(e)=>this.handleField(e, 'imageUrl')}/>
        <label htmlFor="contributedBy">Contributed by</label>
        <input type="text" value={this.state.contributedBy} onChange={(e)=>this.handleField(e, 'contributedBy')}/>
        <button onClick={(e)=>this.sendForm(e)}>Add new beer</button>
      </form>
    )
  }
}
