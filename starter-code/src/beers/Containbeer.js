import React from "react";
import { Link } from "react-router-dom";

class Containbeer extends React.Component {

  render() {
    return (

      <div className="containbeer">
 <Link to={`/beer/${this.props.id}`}>
    <div>
      <img className="img" src={this.props.img} alt></img>
    </div>
    <div>
    <h2>{this.props.name}</h2>
      <h1>{this.props.tagline}</h1>
    <p>Created by:{this.props.name} </p>
</div> 
</Link>
      </div>
    );
  }
}

export default Containbeer;