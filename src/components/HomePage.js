import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './HomePage.css';



export default class HomePage extends Component {
  render() {
    return (
      <>
      <Link to="/beers">
      <h2>All Beers</h2>
      </Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis fermentum ligula at vestibulum. Phasellus accumsan neque id fermentum placerat. Sed nec turpis tempus, commodo orci sit amet, tincidunt purus.</p>
      <img src="" alt="" />
      <Link to="/random">
      <h2>Random Beer</h2>
      </Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis fermentum ligula at vestibulum. Phasellus accumsan neque id fermentum placerat. Sed nec turpis tempus, commodo orci sit amet, tincidunt purus.</p>
      <img src="" alt="" />
      <Link to="/new-beer">
      <h2>New Beer</h2>
      </Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis fermentum ligula at vestibulum. Phasellus accumsan neque id fermentum placerat. Sed nec turpis tempus, commodo orci sit amet, tincidunt purus.</p>
    </>
    )
  }
}
