import React, { Component } from 'react';
import { Link} from 'react-router-dom';


export class Home extends Component {
  render(){
  return(
    <div>
       <div>
         <img src="" alt=""></img>
         <Link to={'/beers'}><h2>All Beers</h2></Link>
          <p>Lorem fistrum ese pedazo de pupita ese que llega. Ese pedazo de la caidita a wan condemor jarl
            <br></br> 
            diodeno a gramenawer no puedor me cago en tus muelas mamaar al ataquerl.</p>
       </div>
       <div>
         <img src="" alt=""></img>
         <Link to={'/randombeer'}><h2>Random Beer</h2></Link>
        
          <p>Lorem fistrum ese pedazo de pupita ese que llega. Ese pedazo de la caidita a wan condemor jarl
            <br></br> 
            diodeno a gramenawer no puedor me cago en tus muelas mamaar al ataquerl.</p>
       </div>
       <div>
         <img src="" alt=""></img>
         <Link to={'/newbeer'}><h2>New Beer</h2></Link>
       
          <p>Lorem fistrum ese pedazo de pupita ese que llega. Ese pedazo de la caidita a wan condemor jarl
            <br></br> 
            diodeno a gramenawer no puedor me cago en tus muelas mamaar al ataquerl.</p>
       </div>
    </div>
  ) 
  }
}

export default Home;