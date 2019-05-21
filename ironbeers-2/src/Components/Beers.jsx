import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Beers extends Component {

  showAllBeers = () => {
    return this.props.beers.map(eachBeer => {
      // console.log(eachBeer.name)
      return <div className='card card-fit'>
        <img src={eachBeer.image_url} className='card-img-top img-fit' />
        <h3 className='card-title'>({eachBeer.name})</h3>
        <h4 className='card-subtitle'>({eachBeer.tagline})</h4>
        <h5 className='card-text'>First Brewed on: ({eachBeer.first_brewed})</h5>
        <h6 className='card-text'>Attenuation Level: ({eachBeer.attenuation_level})</h6>
        <h6 className='card-text'>Experts Say: ({eachBeer.description})</h6>
        <h6 className='card-text'>Contributed By: ({eachBeer.contributed_by})</h6>
      </div>
    })
  }

  render() {

    return (
      <Fragment>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <Link className='nav-link' to={'/Beers'}><img src={require('../img/beers.png')}></img></Link>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              {this.showAllBeers()}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}