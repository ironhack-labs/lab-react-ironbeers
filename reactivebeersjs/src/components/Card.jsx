import React, { Component } from "react";
import {Link} from "react-router-dom";
class Card extends Component {
  render() {
    return (
        
          <Link className="linktext"  to={`/beers/${this.props.data._id}`}><div> <p >{this.props.data.name}</p><div className=""></div></div></Link>
         
    );
  }
}

export default Card;