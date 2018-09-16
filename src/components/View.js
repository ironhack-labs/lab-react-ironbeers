import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class View extends Component {
  render() {
    return (
      <div>
        <Link to={this.props.link}>
          <img src={this.props.image} alt="" />
        </Link>
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default View;
