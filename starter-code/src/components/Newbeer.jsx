import React, { Component } from 'react';
import Navmain from './Navmain'

export default class Addbeer extends Component {
  
  
  render() {
    return (
      <div>
      <Navmain />
      {
        <form action="https://ih-beers-api2.herokuapp.com/beers/new" method="post" >
        <div className="form">
            <label>Name</label>
            <input type="text" name="name"/>
  
            <label>Tagline</label>
            <input type="text" name="tagline"/>
  
            <label>Description</label>
            <input className="input" type="text" name="description"/>

            <label>first_brewed</label>
            <input type="text" name="first_brewed"/>

            <label>brewers_tips</label>
            <input type="text" name="brewers_tips"/>

            <label>attenuation_level</label>
            <input type="number" name="attenuation_level"/>

            <label>contributed_by</label>
            <input type="text" name="contributed_by"/>
                        
            <button type="submit">ADD NEW</button>
            </div>
        </form>
      }
      </div>
    )
    }}