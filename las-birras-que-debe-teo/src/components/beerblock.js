import React, { Component } from "react"
import allbeer from "../images/allbeer.png"
import randombeer from "../images/randombeer.png"
import newbeer from "../images/newbeer.png"

// let d = "./"

export class Block extends Component {
  render() {
    let { img, title, text, address } = this.props;
    return (
      < div >
        <img src={img} alt={title} />
        <h2>
          <a href={address}>{title}</a>
        </h2>
        <p>{text}</p>
      </div >

    )
  }
}

