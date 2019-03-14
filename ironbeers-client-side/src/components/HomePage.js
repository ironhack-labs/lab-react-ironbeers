import React, { Component } from 'react'
import HomeCard from './HomeCard';


import "bulma/css/bulma.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeCard title="All Beers" image="https://secure.i.telegraph.co.uk/multimedia/archive/02624/Pints_of_beer_2624353b.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/>
        <HomeCard title="Random Beer" image="https://www.wur.nl/upload_mm/6/c/c/83abc27b-cbb3-48b2-81ee-f8515f7cad40_The%20Science%20of%20beer_d196298f_490x330.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/>
        <HomeCard title="New Beers" image="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/06/14/pinkipa-3.jpg?w968h681" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"/>
      </div>
    )
  }
}

export default HomePage