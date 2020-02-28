import { Link } from 'react-router-dom';

import React from "react";
import Beerlist from "./Beerlist";

class Allbeers extends React.Component {

state ={
 beers:this.props.dataFromParent
}
  render() {
    return (

      <div>
      {/* The data from parent is: {this.props.dataFromParent}  */}
        <h1><Link to="/">Home</Link></h1>       
        <h2>Hola estoy en All Beers</h2>

         <div className="beercard">
         {/* 
         Si yo comento esto la aplicación tira pero me gustaría saber hacer el map
         {this.state.beers.map((beer, idx) => {
             {key=idx}
            <img src={this.props.dataFromParent[idx].image_url}/>
            <h2>{this.props.dataFromParent[idx].name}</h2>
            <h3>{this.props.dataFromParent[idx].tagline}</h3>
            
         })
         } */}
         
        </div>

         
      </div>
    );
  }
}

export default Allbeers;

{/* ESte primero sí lo piota
    <img src={this.props.dataFromParent[0].image_url}/>
         <h2>{this.props.dataFromParent.name}</h2>
         <h3>{this.props.dataFromParent.tagline}</h3> */}