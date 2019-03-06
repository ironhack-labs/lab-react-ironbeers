import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Home extends Component {

  render = ()=> {

      return (
        <div>
          <div className="card has-margin-top-20">
            <div className="card-image">
              <figure className="image is-4by3">
              <Link to={`/beers`}> <img src="https://images.pexels.com/photos/1571701/pexels-photo-1571701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=" image" /></Link>
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                </div>
                <div className="media-content">
                  <p className="title is-12">All Beers</p>
                  <p className="subtitle is-6 is-size-7 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card has-margin-top-20">
            <div className="card-image">
              <figure className="image is-4by3">
              <Link to={`/random`}> <img src="https://images.pexels.com/photos/1128975/pexels-photo-1128975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=" image" /></Link>
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                </div>
                <div className="media-content">
                  <p className="title is-12">Random Beer</p>
                  <p className="subtitle is-6 is-size-7 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card has-margin-top-20">
            <div className="card-image">
              <figure className="image is-4by3">
              <Link to={`/new`}>  <img src="https://images.pexels.com/photos/1624174/pexels-photo-1624174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=" image" /></Link>
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                </div>
                <div className="media-content">
                  <p className="title is-12">New Beer</p>
                  <p className="subtitle is-6 is-size-7 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>
              </div>
            </div>
          </div>
       </div>
      );

    }
}