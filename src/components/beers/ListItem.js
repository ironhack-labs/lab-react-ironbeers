

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
            <img src={this.props.image_url} className='image-item-beer has-padding-bottom-10' alt="Image" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
          
            <Link to={`single/${this.props._id}`}><strong>{this.props.name}</strong></Link>
              <br />  <p>{this.props.tagline}</p>
             <small>{this.props.contributed_by}</small> 
          </div>
        </div>
      </article>
      </div>
    )
  }
}