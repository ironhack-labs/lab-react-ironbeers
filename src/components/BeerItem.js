import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class BeerItem extends Component {
  render() {

    const{name, tagline, contributed_by, _id}= this.props.beer
    
    return (
      <article>
      <div className='beer-img-container'><img className='beer-img'src={this.props.beer.image_url} alt=''/></div>
      <div>
        <div>
          <h2> {name}</h2>
          <h3> {tagline}</h3>
          <p> {contributed_by}</p>
        </div>
        <Link to={`/beer/${_id}`} ><p>Check it out!</p></Link>
      </div>
        
      </article>
    )
  }
}
