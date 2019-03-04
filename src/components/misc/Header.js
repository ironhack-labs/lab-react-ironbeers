import React, { Component } from 'react';

export default class Header extends Component {

  render = ()=> {

      return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Iron Beers
            </h1>  
          </div>
        </div>
      </section>
      );

    }
}