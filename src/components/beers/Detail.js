import React, { Component } from 'react'



export default class Detail extends Component {

  render = ()=> {
    return(     
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={this.props.image_url} alt="Placeholder image" class="detailed_image"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">    
            <div className="media-content">
              <p className="title is-4">{this.props.name}</p>
              <p className="subtitle is-6">{this.props.tagline}</p>
            </div>
            <div className="media-right">
              <strong><h2 className="is-6 margin-0" >{this.props.attenuation_level}</h2></strong>
              <small>{this.props.first_brewed}</small>
            </div>
          </div>
          <div className="content">
           <p>{this.props.description}</p>
          </div>
        </div>
      </div>
     </div>
    )
  }
}




