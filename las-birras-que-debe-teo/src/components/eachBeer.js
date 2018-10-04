import React, { Component } from "react"
import axios from "axios";

let allUrl = "https://ironbeer-api.herokuapp.com/beers/all"

export class Block extends Component {
  render() {
    axios.get(allUrl)
    let { name, tagline, image_url, contribuited_by, _id } = this.props;
    return (
      < div >
        <img src={image_url} alt={name} />
        <h2>
          <a href={_id}>{name}</a>
        </h2>
        <p>{tagline}</p>
        <p>{contribuited_by}</p>

      </div >

    )
  }
}