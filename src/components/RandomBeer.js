import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class RandomBeer extends React.Component {
  state = {
    beers: []
  }

componentDidMount(){
  axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => {
          this.setState({
              beers: res.data
          })
      })
}  

render(){
    const {name, image_url, first_brewed, tagline, attenuation_level, description, contributed_by} = this.state.beers
    return (
        <div>
         <Link to='/'> <img style={{width: '100%'}} src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' alt='home button'/> </Link>
        <img style={{height: '200px'}} src={image_url} alt={name}/>
        <h2>{name}</h2>
        <h3>{tagline}</h3>
        <p>First brewed: {first_brewed}</p>
        <p>{attenuation_level}</p>
        <p>{description}</p>
        <p>{contributed_by}</p>   
        </div>
    )
}
}
