import React, { Component } from 'react'
import BeersImg from '../assets/beers.png'
import RondomImg from '../assets/random-beer.png'
import NewImg from '../assets/new-beer.png'
import {  NavLink } from "react-router-dom";


class Home extends Component {
  render() {
    return (
     
      <div className="flex-column">
        <img src={BeersImg} alt=""/>
       <NavLink to="/beers">All Beers</NavLink>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim illo excepturi! Aut, esse quam! Totam eveniet minus deleniti illum, voluptatem repellendus odio! Repellendus fugiat quas saepe facilis! Sit, dolores!</p>
        <img src={RondomImg} alt=""/>
        <NavLink to="/random-beer">Random Beer</NavLink>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim illo excepturi! Aut, esse quam! Totam eveniet minus deleniti illum, voluptatem repellendus odio! Repellendus fugiat quas saepe facilis! Sit, dolores!</p>
        <img src={NewImg} alt=""/>
        <NavLink to="/new-beer">New Beer</NavLink>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim illo excepturi! Aut, esse quam! Totam eveniet minus deleniti illum, voluptatem repellendus odio! Repellendus fugiat quas saepe facilis! Sit, dolores!</p>
      </div>
    )
  }
}
export default Home;