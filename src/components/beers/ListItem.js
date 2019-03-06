

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import axios from 'axios'

export default class ListItem extends Component {

  render = ()=> {
    return(

      <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
          <Link to={`single/${this.props._id}`}> <img src={this.props.image_url} className='image-item-beer has-padding-bottom-10' alt="Image" /></Link>
          </figure>
        </div>
        <Link to={`single/${this.props._id}`}>
         <div className="media-content">
          <div className="content">
          
            <Link to={`single/${this.props._id}`}><strong>{this.props.name}</strong></Link>
              <br />  <p>{this.props.tagline}</p>
             <small>{this.props.contributed_by}</small> 
          </div>
        </div></Link>
      </article>
      </div>
    )
  }
}