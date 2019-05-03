import React, { Component } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';


export default class Random extends Component {
  constructor(props){
    super(props)
    this.state = {
      randomBeer: {}
 }
}

  componentDidMount(){
    axios
        .get("http://localhost:5000/random")
        .then(BeerNewRandom => {
            const BeerRandom = BeerNewRandom.data
            console.log(BeerRandom)
  
            this.setState({
                ...this.state,
                randomBeer: BeerRandom
            })
        })
  }


  render() {
    
    return (
      <div>
         <div className='beer'>
         <div>
            <img src={this.state.randomBeer.image_url}/>
           </div>
            <div>
            {console.log(this.state.randomBeer._id)}
            <Link className="" to={`/beers/${this.state.randomBeer._id}`}>{this.state.randomBeer.name}</Link>
             <p>{this.state.randomBeer.tagline}Hola que ase</p>
             <p>{this.state.randomBeer.contributed_by}</p>
             </div>
             </div> 
      </div>
    )
  }
}
