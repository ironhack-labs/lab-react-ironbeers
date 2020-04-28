import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HomeButton extends Component {
  render() {
    return(
      <div className="home-button-box">
        <Link to="/"><img src="./images/home-icon.png" alt="home"/></Link>
      </div>
    )
  }
}

export default HomeButton;