import React, {Component} from 'react'
import Axios from 'axios'
import BeerDisplay from './BeerDisplay';
var url  = 'https://ironbeer-api.herokuapp.com/beers/single/'

 class BeerDetail extends Component {

  state = {
    beer: null
  }

  componentWillMount(){
    var {id} = this.props.match.params
    Axios.get(url+id)
      .then(r=>{
        this.setState({beer: r.data})
      })
      .catch((e)=>console.log("error connecting to API"))

  }

  render(){
    
    if(!this.state.beer) 
      return (
        <div></div>
      );
    
 // let {name,tagline,attenuation_level, description, image_url, brewers_tips} = this.state.beer
 
    return (
        <BeerDisplay info={this.state.beer} />
    )
  }

}

export default BeerDetail