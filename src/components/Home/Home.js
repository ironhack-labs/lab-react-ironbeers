import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <Link to="/beers">
        <div className="card custom-card">
          <div className="card-image custom-card-image">
            <figure className="image is-16by9">
              <img
                src="https://media.timeout.com/images/104673154/750/422/image.jpg"
                alt="all beers"
              />
            </figure>
          </div>
          <div className="card-content custom-content">
            <div className="media custom-media">
              <div className="media-content">
                <p className="title is-4">All Beers</p>
              </div>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </div>
          </div>
        </div>
      </Link>
        <Link to="/random">
        <div className="card custom-card">
        <div className="card-image custom-card-image">
          <figure className="image is-16by9">
            <img
              src="https://unibave.net/wp-content/uploads/2018/07/cervejas.jpg"
              alt="random beer"
            />
          </figure>
        </div>
        <div className="card-content custom-content">
          <div className="media custom-media">
            <div className="media-content">
              <p className="title is-4">Random Beer</p>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
          </div>
        </div>
      </div>
        </Link>
      <Link to='/new-beer'>
      <div className="card custom-card">
        <div className="card-image custom-card-image">
          <figure className="image is-16by9">
            <img
              src="https://www.hominilupulo.com.br/wp-content/uploads/2014/07/Hops_IPA_Pour-BA-1200.jpg"
              alt="New beer"
            />
          </figure>
        </div>
        <div className="card-content custom-content">
          <div className="media custom-media">
            <div className="media-content">
              <p className="title is-4">New Beer</p>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
          </div>
        </div>
      </div>
      </Link>
      
    </div>
  );
}
