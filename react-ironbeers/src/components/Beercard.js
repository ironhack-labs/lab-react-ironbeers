import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Beercard extends Component {

  render(){
    return(
        <div className="box">
                <article class="media">
                     <div className="media-left">
                        <figure className="image is-32x32">
                            <img src={this.props.beerimg}></img>
                        </figure>
        </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{this.props.beername}</strong>
          <br></br>
          {this.props.beerdescription}
        </p>
      </div>
    </div>
  </article>
</div>
    )
  }
}

export default Beercard;