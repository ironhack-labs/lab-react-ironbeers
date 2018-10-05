import React, {Component} from 'react'
import Axios from 'axios'
import BeerDisplay from './BeerDisplay';
var urlNew  = 'https://ironbeer-api.herokuapp.com/beers/all'

 class RandomBeer extends Component {

  state = {
    beer: null
  }

  componentWillMount(){
    Axios.get(urlNew)
      .then(r=>{
        console.log(r)
        this.setState({beer: r.data[Math.floor(Math.random()*r.data.length)]})
      })
      .catch((e)=>console.log(e))

  }

  render(){
    
    if(!this.state.beer) 
      return (
        <div><h1>Random Beer</h1></div>
      );
    
 // let {name,tagline,attenuation_level, description, image_url, brewers_tips} = this.state.beer
 
    return (
        <div>
          <h1>Random Beer</h1>
          <BeerDisplay info={this.state.beer} /></div>
        
    )
  }

}

export default RandomBeer