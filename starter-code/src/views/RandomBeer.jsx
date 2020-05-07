import React from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'

class RandomBeer extends React.Component {

  state={
    randomBeer: null
  }

  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then(response=>{
      this.setState({randomBeer: response.data})
      console.log(response.data)
    })
    .catch(err=>console.log('elle marche pas ton appli -->',err))
  }
  
  render(){
    if(!this.state.randomBeer) return null
    console.log('rendered')
    return (
      <div>
        <NavBar/>
        <div className='beer-showcase'>
          <div className='showcase-img'>
          <img src={this.state.randomBeer.image_url} alt=""/>
          </div>
          <div className='beer-desc'>
            <h2>{this.state.randomBeer.name}</h2>
            <h3>{this.state.randomBeer.tagline}</h3>
            <p><span>Created by:</span> {this.state.randomBeer.contributed_by}</p>
            <p>{this.state.randomBeer.first_brewed}</p>
            <p>{this.state.randomBeer.attenuation_level}</p>
            <p>{this.state.randomBeer.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomBeer
