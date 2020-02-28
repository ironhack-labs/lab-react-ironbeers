import React from "react";
import Nav from "./Nav";
import axios from 'axios';
class Containbeer extends React.Component {


    componentDidMount(){
        axios.get("https://ih-beers-api2.herokuapp.com/beers/:id")
        .then(allBeers =>  this.setState({allBeers: allBeers.data}),
        )}

  render() {
    return (


      <div className="containbeer">
 <Nav></Nav>
    <div>
      <img className="img" src={this.props.img} alt></img>
    </div>
    <div>
    <h2>{this.props.name}</h2>
      <h1>{this.props.tagline}</h1>
    <p>Created by:{this.props.name} </p>
</div> 

      </div>
    );
  }
}

export default Containbeer;