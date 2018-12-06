import React, { Component } from 'react'
import HomeSection from './HomeSection'

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        {this.props.sections.map((section,index)=>{
        return(<HomeSection img={section.img} title={section.title} text={section.text} key={index} link={section.link}/>)})}
      </div>
    )
  }
}
