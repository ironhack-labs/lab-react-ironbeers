import React from 'react'
import Navbar from './Navbar'
import Axios from 'axios'

class RandomBeer extends React.Component{
state={
  beer: {}
}

componentDidMount() {
  Axios.get(`https://ih-beer-api.herokuapp.com/beers/random`)
      .then(theBeer => {
          this.setState({
              beer: theBeer.data
          })
  })
}

  render(){
    return(
<div class='list-group'>
<Navbar />
<div className="list-group-item list-group-item-action">
<img width="100px" src={this.state.beer.image_url} alt='beer'/>
<h1 className ='beer-description'>{this.state.beer.name} {this.state.beer.attenuation_level}</h1>
<h2 className ='beer-description'>{this.state.beer.tagline} {this.state.beer.first_brewed}</h2>

<div className ='beer-description'>{this.state.beer.description}</div>
<div className ='beer-description'>{this.state.beer.contributed_by}</div>
</div>
    </div>

    )
  }
}
export default RandomBeer