import React, { Component } from 'react'
import HomeSection from './HomeSection'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      sections:[{
        img: "https://assets3.thrillist.com/v1/image/676279/size/tmg-article_default_mobile.jpg",
        link: "/beers",
        title: "All beers",
        text: "Click to see all beers"
      },
      {
        img: "https://www.wur.nl/upload_mm/6/c/c/83abc27b-cbb3-48b2-81ee-f8515f7cad40_The%20Science%20of%20beer_d196298f_490x330.jpg",
        link: "/random-beer",
        title: "Random beer",
        text: "This will open a random beer"
      },
      {
        img: "https://www.wur.nl/upload_mm/6/c/c/83abc27b-cbb3-48b2-81ee-f8515f7cad40_The%20Science%20of%20beer_d196298f_490x330.jpg",
        link: "/new-beer",
        title: "New Beer",
        text: "Here you can add a new beer"
      },]
    }
  }
  render() {
    return (
      <div className="Home">
        {this.state.sections.map((section,index)=>{
        return(<HomeSection img={section.img} title={section.title} text={section.text} key={index} link={section.link}/>)})}
      </div>
    )
  }
}