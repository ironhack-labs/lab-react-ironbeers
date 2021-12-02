import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, Container} from 'react-bootstrap'
import BeerService from '../../services/beersService';


class DetailsBeer extends Component {

    constructor() {
        super()
    
        this.state = {
          image_url: "",
          name: "",
          tagline: "",
          first_brewed: "",
          attenuation_level: "",
          description: "",
          contributed_by: "",
        }
    
        this.service = new BeerService()
      }

      componentDidMount() {
        const id = this.props.match.params.id

        this.service.getOneBeer(id)
        .then((response) => {
          const {image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = response.data
            this.setState({ image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by })
      })

    }
    
    render() {
     return (
        <div>
            <img src={this.state.image_url} alt={this.state.name}></img>
            <h2>{this.state.name}</h2>
            <p>{this.state.tagline}</p>
            <p>{this.state.first_brewed}</p>
            <p>{this.state.attenuation_level}</p>
            <p>{this.state.description}</p>
            <p>{this.state.contributed_by}</p>

        </div>  

            )
        
     }
}


export default DetailsBeer