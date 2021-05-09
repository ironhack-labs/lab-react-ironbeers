import React from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Header from './Header';


class NewBeer extends React.Component {
  render(){  
  return (
      <div className="newBeer">
    <Header />
    <form action="">

    <label htmlFor="name">Name</label>
    <input type="text" name="name"/>
    
    <label htmlFor="tagline">Tagline</label>
    <input type="text" name="tagline"/>
    
    <label htmlFor="description">Description</label>
    <input type="text" name="description"/>

    <label htmlFor="first_brewed">First Brewed</label>
    <input type="text" name="first_brewed"/>

    <label htmlFor="brewers_tips">Brewers Tips</label>
    <input type="text" name="brewers_tips"/>

    <label htmlFor="attenuation_level">Attenuation Level</label>
    <input type="number" name="attenuation_level"/>
    
    <label htmlFor="contributed_by">Contributed By</label>
    <input type="text" name="contributed_by"/>

    <button type="submit">ADD NEW</button>

    </form>
    </div>
    )
  }
}

export default NewBeer;