///origininal si barra de busqueda

import React, {Component} from 'react';
import axios from 'axios';
import CardComponent from './CardComponent'
const ENDPOINT = 'https://ih-beers-api2.herokuapp.com/beers';

class AllBeers extends Component {

  state = {
      beers: []
    }

    async componentDidMount(){
      const {data} = await axios.get (ENDPOINT)
      this.setState({ beers: [...data] })
    }
    render(){
      const { beers } = this.state;
      return(
        <>
            <h1 style={{
                marginTop: "100px"}}>
                Lista de cervezas
            </h1>
        {beers.map((beer, i) => (
          <CardComponent
            key = {i}
            route={beer._id}
            image={beer.image_url}
            name = {beer.name}
            description = {beer.description}
            contributor = {beer.contributed_by}
          />
        ))}
        </>
      )
    }
}
export default AllBeers;