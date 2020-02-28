import React from "react";
import Nav from "./Nav";
import Containbeer from "./Containbeer";

class Beers extends React.Component {

  render() {
    return (
      <div>
  <Nav></Nav>
     <div className="beers">
     {this.props.beers.map(beer =>(
           <Containbeer id={beer._id} tagline={beer.tagline} name={beer.name} img={beer.image_url} flag={beer.flag} contributed_by={beer.contributed_by} ></Containbeer>
          ))}   
     </div>
      </div>
    );
  }
}

export default Beers;