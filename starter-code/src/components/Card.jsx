import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
<React.Fragment>
            <article className='d-flex flex-column align-items-center'>
          <div className='card  p-4'>
            <img src={this.props.beer.image_url} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>{this.props.beer.name}</h5>
              <h6 className='d-inline'>{this.props.beer.attenuation_level}</h6>
              <p className='blockquote-footer'>{this.props.beer.tagline}</p>
              <p className='d-inline'>{this.props.beer.first_brewed}</p>
              <p className='card-text'>{this.props.beer.description}</p>
              <p className='card-text'>
                <small className='text-muted'>{this.props.beer.contributed_by}</small>
              </p>
            </div>
          </div>
        </article>
</React.Fragment>
        )
    }
}
