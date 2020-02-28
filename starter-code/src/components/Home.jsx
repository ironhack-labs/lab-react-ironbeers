import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
        <div className="menu">
          <div className="menu-item">
            <img src="/images/beers.png" alt="beers img"/>
            <Link to="/beers"><h2>All beers</h2></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio corrupti dolorem culpa eos eaque dolore ullam, est repudiandae odit consectetur nisi reprehenderit repellat fugiat dignissimos illo, expedita blanditiis quasi!</p>
          </div>
          <div className="menu-item">
            <img src="/images/random-beer.png" alt="beers img"/>
            <Link to="/random-beer" onClick={() => this.props.onRandomClick()}><h2>Random beer</h2></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio corrupti dolorem culpa eos eaque dolore ullam, est repudiandae odit consectetur nisi reprehenderit repellat fugiat dignissimos illo, expedita blanditiis quasi!</p>
          </div>
          <div className="menu-item">
            <img src="/images/new-beer.png" alt="beers img"/>  
            <Link to="/new-beer"><h2>New beer</h2></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio corrupti dolorem culpa eos eaque dolore ullam, est repudiandae odit consectetur nisi reprehenderit repellat fugiat dignissimos illo, expedita blanditiis quasi!</p>
          </div>
        </div>
    );
  }
}