import React, { Component } from "react";

export default class OneBeer extends Component {
  render() {
    const beer = { ...this.props.beer[0] };
    console.log(beer);
    return (
      <div className="oneServesa marginpage">
        <img src={beer.image_url}></img>
        <div className="topbeer">
          <div className="leftside">
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
          </div>
          <div className="rightside">
            <h2>{beer.attenuation_level}</h2>
            <p>
              <strong>{beer.first_brewed}</strong>
            </p>
          </div>
        </div>

        <p>{beer.description}</p>
        <h2>{beer.contributed_by}</h2>
      </div>
    );
  }
}
