import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Section extends Component {
  render() {
    return (
      <div>
        <div className="section_container">
        <div className="section_img_crop">
        <img src={this.props.img} alt={this.props.section} className="section_img" />
        </div>
        <h2>{this.props.section}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Link to={this.props.linkId}>
        <button className="btn section_btn">{this.props.section} section</button>
        </Link>
        </div>
      </div>
    )
  }
}

export default Section
