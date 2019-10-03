import React, { Component } from 'react'
import HomeCard from './../../components/HomeCard/HomeCard'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  constructor() {
    super()
    this.homeLinks = [
      {
        to: "/beers",
        title: "Watch all beers",
        image: "/images/beers.png",
        description: "Lorem ipsum dolor sit amet."
      },
      {
        to: "/random-beer",
        title: "Random beer",
        image: "/images/random-beer.png",
        description: "Lorem ipsum dolor sit amet."
      },
      {
        to: "/new-beer",
        title: "Create your beer",
        image: "/images/new-beer.png",
        description: "Lorem ipsum dolor sit amet."
      }
    ]
  }
  
  render() {
    return (
      <div>
        <h1>Hello, I am the Home site</h1>
        <ul className="home-cards">
          {this.homeLinks.map((homeLink, idx) => {
            return (
              <li>
                <Link to={homeLink.to}>
                  <HomeCard title={homeLink.title} image={homeLink.image}>
                    <p>{homeLink.description}</p>
                  </HomeCard>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
