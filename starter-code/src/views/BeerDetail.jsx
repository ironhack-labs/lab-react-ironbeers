import React from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'


class BeerDetail extends React.Component {
  
  state={
    beer: null
  }

  componentDidMount(){
    const id = this.props.match.params.id
    axios.get('https://ih-beers-api2.herokuapp.com/beers/'+id)
    .then(response=>{
      this.setState({beer: response.data})
    })
    .catch(err=>console.log(err))
  }
  
  render(){
    if(!this.state.beer) return null
    return (
      <div>
        <NavBar/>
        <div className='beer-showcase'>
          <div className='showcase-img'>
          <img src={this.state.beer.image_url} alt=""/>
          </div>
          <div className='beer-desc'>
            <h2>{this.state.beer.name}</h2>
            <h3>{this.state.beer.tagline}</h3>
            <p><span>Created by:</span> {this.state.beer.contributed_by}</p>
            <p>{this.state.beer.first_brewed}</p>
            <p>{this.state.beer.attenuation_level}</p>
            <p>{this.state.beer.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BeerDetail
