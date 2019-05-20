import React from 'react'
import Axios from 'axios'
import Navbar from './Navbar'

class BeerDetail extends React.Component{
state ={
  beer: {}
}
  componentDidMount(){
    console.log (this.props.match.params.id)
    Axios.get(`https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.id}`)
    .then(theBeer=>{
    this.setState({
      beer:theBeer.data
    })
  })
}
    
  render(){
    return(
    <div>

<Navbar />
{/* Details
{this.props.match.params.id} */}
<div class='list-group'>
<div className="list-group-item list-group-item-action">
<img width="100px" src={this.state.beer.image_url} alt='beer'/>
<h1>{this.state.beer.name} {this.state.beer.attenuation_level}</h1>
<h2>{this.state.beer.tagline} {this.state.beer.first_brewed}</h2>

<div class = 'beer-description'>{this.state.beer.description}</div>
<div>{this.state.beer.contributed_by}</div>
</div>
</div>
    </div>
    )}
}
export default BeerDetail