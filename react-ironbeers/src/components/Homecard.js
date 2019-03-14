import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Homecard extends Component {

  render(){
    return(
      <div className="box hero">
       <figure className="image is-16by9">
       <img src={this.props.img}></img>
       </figure>
       <Link to={this.props.link}>
            <div class="tile is-parent">
                <article class="tile is-child notification is-info">
                    <p class="title">{this.props.head}</p>
                    <p class="subtitle">{this.props.para}</p>
                </article>
            </div>
      </Link>
      </div>
    )
  }
}

export default Homecard;