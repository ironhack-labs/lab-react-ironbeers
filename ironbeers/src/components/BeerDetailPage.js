import React from 'react';
import axios from "axios"
import {Link} from "react-router-dom"


class BeerDetailPage extends React.Component {

  state = {
    beers: []
  }

  componentDidMount(){
  axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${this.props.match.params.beerId}`).then(response => {

    this.setState({
      beers: response.data
    })
  })

  }


render() {

return (<div> 
  <Link to="/beers">Back to beer overview</Link> <br /><br />
      <img src={this.state.beers.image_url} width="15%" alt={this.state.beers.name}></img>
      <ul>
      <li>Name: {this.state.beers.name}</li>
      <li>Tagline:{this.state.beers.taglinge}</li>
      <li>Description: {this.state.beers.description}</li>
      <li>First Brewed: {this.state.beers.first_brewed}</li>
      <li>Attenuation Level: {this.state.beers.attenuation_level}</li>
      </ul>
    </div>

    )
    
  }
}



export default BeerDetailPage;
