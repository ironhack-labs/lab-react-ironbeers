import React, { Component } from 'react'
import Home from "../home/Home"
import GetBeers from "../getBeers/GetBeers"
import { timingSafeEqual } from 'crypto';

export default class  RandomBeer extends Component {

  constructor(props){
    super(props)
    this.state={
      beer:[],
      name:'',
      color:''
    }
    this.allBeers = new GetBeers();
    this.getRandomBeer();
  }

  getRandomBeer = () =>{
    this.allBeers.getRandomBeer()
    .then(data=>{
      this.setState({...this.state,beer:data})
    })
    .catch(err=>console.log(err))

  }
  
  render() {
  
//  <Home display={this.props.match}/>
let beer = this.state.beer.map((randomBeer,idx)=>{
  return( 
 <div key={idx}>
 <p>{randomBeer.name}</p>
 <img src={`${randomBeer.image_url}`} alt={`${randomBeer.name}`}/> 
 <p>{randomBeer.tagline}</p>
 <p>{randomBeer.attenuation_level}</p>
 <p>{randomBeer.description}</p>
 <p>{randomBeer.contributed_by}</p>
   </div>
)
})     

    return (
      <div>
                <Home path={this.props.match.url}/>  

        {beer}
      </div>
    )
  }
}
