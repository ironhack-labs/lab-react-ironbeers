import React, { Component } from 'react';
import BeerSection from './BeerSection'

class MainPage extends Component {
  render() {
    return (
      <div className="container">
        <BeerSection 
        title="All beers" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris." 
        link="/beers"
        image="https://source.unsplash.com/720x240/?beers"/>
        <BeerSection 
          title="Random beer" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris." 
          link="/random"
          image="https://source.unsplash.com/720x240/?beer"/>
        <BeerSection
          title="New beer" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris." 
          link="/new"
          image="https://source.unsplash.com/720x240/?cerveza"/>
      </div>

    )
  }
}

export default MainPage