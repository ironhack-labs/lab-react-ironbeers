import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {

    return (

      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Link className='nav-link' to={'/Beers'}><img src={require('../img/beers.png')}></img></Link>
              <div className="row">
                <div className="col-md-12">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Link className='nav-link' to={'/NewBeers'}><img src={require('../img/new-beer.png')}></img></Link>
              <div className="row">
                <div className="col-md-12">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Link className='nav-link' to={'/RandomBeers'}><img src={require('../img/random-beer.png')}></img></Link>
              <div className="row">
                <div className="col-md-12">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}