import React, { Component } from "react";
import axios from 'axios';
import styles from "./Allbeers.css";
import {Link} from "react-router-dom"

class Allbeers extends Component {

  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentWillMount(){
    axios.get('https://ironbeer-api.herokuapp.com/beers/all')
    .then(response => {
      this.setState({beers: response.data})
    })
  }
  
  render() {
    
    const beers = this.state.beers
    console.log(beers)
    return (
     <div>
       { beers.map((e,i) => {
         return (
           <Link to={"/single/" + e._id}><div className='allBeerSection' beers={beers}>
           <img src={e.image_url} alt="beer"></img>
           <h3>{e.name}</h3>
           <h5>{e.tagline}</h5>
           <p><strong>created by: </strong>{e.name}</p>
           </div></Link>
         )
       })}
     </div>
    );
  }
}

export default Allbeers;