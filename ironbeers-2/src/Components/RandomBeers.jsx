import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class RandomBeers extends Component {



  showRandomBeer = () => {
    //No need for a map when it's just a single object
    return (<div className='card card-fit'>
      <img src={this.props.randomBeers.image_url} className='card-img-top img-fit' />
      <h3 className='card-title'>({this.props.randomBeers.name})</h3>
      <h4 className='card-subtitle'>({this.props.randomBeers.tagline})</h4>
      <h5 className='card-text'>First Brewed on: ({this.props.randomBeers.first_brewed})</h5>
      <h6 className='card-text'>Attenuation Level: ({this.props.randomBeers.attenuation_level})</h6>
      <h6 className='card-text'>Experts Say: ({this.props.randomBeers.description})</h6>
      <h6 className='card-text'>Contributed By: ({this.props.randomBeers.contributed_by})</h6>
    </div>)
  }

  render() {

    return (
      <Fragment>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <Link className='nav-link' to={'/RandomBeers'}><img src={require('../img/random-beer.png')}></img></Link>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              {this.showRandomBeer()}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}