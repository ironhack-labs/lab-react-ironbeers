import React, { Component } from 'react'
import IronbeersService from "../../components/services/Ironbeers.service";


class RandomBeer extends Component {
  constructor(props) {
    super(props)

   this.state = {
      beers: []
    }

    this.service = new IronbeersService()
  }

  componentDidMount() {
    this.service.getRandomBeer()
      .then(response => {
        const beers = response.data
        console.log(response)
        this.setState({ beers: beers })
      })
      .catch(err => console.log(err))
  }

  render() {

    return (
    <div>
        <h1>Random Beer</h1>

       <div><img src={this.state.beers.image_url} alt="imgBeer"/> {this.state.beers.name} {this.state.beers.tagline}</div>
     </div>
    )

     
    }
    
  
}
export default RandomBeer