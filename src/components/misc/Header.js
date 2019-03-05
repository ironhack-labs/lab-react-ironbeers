import React, { Component } from 'react';
import { Link } from 'react-router-dom'



export default class Header extends Component {
  render = () => {
    return (
      <section className="hero is-primary is-fixed-top">
        <div className="hero-body">
          <div className="container">
          <Link to='/home'> <i class="fas fa-home is-size-2"></i></Link> 
          </div>
        </div>
      </section>
    );
  }
}