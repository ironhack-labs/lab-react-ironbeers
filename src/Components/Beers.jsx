import Header from './../Components/Header';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from "axios";

export default class Beers extends Component {
   
  state = {
    beers: null,
    search: "",
  };
  handleChange = (evt) => {
    this.setState({ search: evt.target.value });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.search !== prevState.search)
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.search}`)
    .then(res => this.setState({beers: res.data}))
    .catch(err=> console.log(err))
  }
  componentDidMount = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(res=>
      this.setState({beers: res.data}))
      .catch(err=>console.log(err));
  }
  render() {
    
  if (!this.state.beers) return <h1>Loading. . .</h1>;

    return (
      <div  className="page-layout">
      <Header />
      <input onChange={this.handleChange} name="search" value={this.state.search} type="text" placeholder="search"/>
      {this.state.beers.map((beer) => (
        <Link key={beer._id} to={`/beers/${beer._id}`}>
          <article className="beer-item">
            <div className="img-box">
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className="basic-info">
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
              <p>Created by: {beer.contributed_by}</p>
            </div>
          </article>
        </Link>
      ))}
        
      </div>
    )
  }
}