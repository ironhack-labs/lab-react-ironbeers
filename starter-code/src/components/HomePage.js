import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="func">
          <img src="/images/beers.png" alt="beers"/>
          <Link className="title" to="/beers">All beers</Link>
          <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vel quod, nihil tempora alias distinctio earum totam, inventore omnis eveniet ratione asperiores nulla sequi nemo sapiente esse qui ipsam ab!</p>
        </div>
        <div className="func">
          <img src="/images/random-beer.png" alt="beers"/>
          <Link className="title" to="/random-beer">Random Beer</Link>
          <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vel quod, nihil tempora alias distinctio earum totam, inventore omnis eveniet ratione asperiores nulla sequi nemo sapiente esse qui ipsam ab!</p>
        </div>
        <div className="func">
          <img src="/images/new-beer.png" alt="beers"/>
          <Link className="title" to="/new-beer">New beer</Link>
          <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vel quod, nihil tempora alias distinctio earum totam, inventore omnis eveniet ratione asperiores nulla sequi nemo sapiente esse qui ipsam ab!</p>
        </div>
      </div>
    )
  }
}
