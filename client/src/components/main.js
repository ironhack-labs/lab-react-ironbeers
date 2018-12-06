import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class main extends Component {
  render() {
    return (
      <div>
        <div>
          <img src="https://thumbor.thedailymeal.com/RQZO9FJDv735FvjcOmd3p5PPFCU=/840x565/https://www.thedailymeal.com/sites/default/files/2018/02/13/iStock-854848732_0_0.jpg" alt="" />
          <Link to='/beers' style={{ textDecoration: 'none' }}>
            <h1>All Beers</h1>
          </Link>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aperiam aliquam quibusdam illum perspiciatis accusantium magnam asperiores itaque tenetur molestias saepe mollitia commodi repellendus, expedita dicta architecto laudantium, facilis nam.</p>
        </div>
        <div>
          <img src="https://cdn.pastemagazine.com/www/articles/classic%20beers%20shutter%20long.jpg" alt="" />
          <Link to='/random-beer' style={{ textDecoration: 'none' }}>
            <h1>Random Beers</h1>
          </Link>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro mollitia id deserunt. Maxime possimus labore consectetur mollitia sunt, exercitationem est nam numquam earum nostrum amet qui quidem odit fugit distinctio!</p>
        </div>
        <div>
          <img src="https://www.erniesdenver.com/wp-content/uploads/2015/10/Beer-Pitcher.jpg" alt="" />
          <Link to='/new-beer' style={{ textDecoration: 'none' }}>
            <h1>New Beer</h1>
          </Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nulla debitis cumque molestiae sit maxime aliquam officia at ab quis. Voluptatum recusandae ut esse dolor, in maiores architecto non facere!</p>
        </div>
      </div>
    )
  }
}
