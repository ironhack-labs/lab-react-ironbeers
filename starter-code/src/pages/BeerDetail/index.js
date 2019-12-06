import React, {Component} from 'react';
import axios from 'axios';
import DetailComponent from './DetailComponent'

const ENDPOINT = 'https://ih-beers-api2.herokuapp.com/beers';



export default class BeerDetail extends Component {

  state = {}

  async componentDidMount() {
    const { data } = await axios.get(`${ENDPOINT}`)
    const beer = data.find( beer => beer._id === this.props.match.params.id );
    this.setState({ beer });
  }

  render(){

    const { beer } = this.state
    if (!beer) {
      return (
        <div className="App">
          <h1>Loading...</h1>
        </div>
      )
    }
  

    return(
      <div className="detalle">
        <DetailComponent
        image = {beer.image_url}
        name = {beer.name}
        tagline={beer.tagline}
        brewed = {beer.first_brewed}
        level = {beer.attenuation_level}
        description = {beer.description}
        contributor = {beer.contributed_by}
        />
        
      </div>
        


    )
  }
}