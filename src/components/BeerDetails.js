import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios';
import {API_URL} from '../config'


 class BeerDetails extends Component {
     state = {
         beers: []
     }

     componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`${API_URL}/${id}`)
        .then((res)=>{
          this.setState({
            beers: res.data
          })
        })
    }


    render() {
        return (
            <div>
                <Header />
                <div>
                    <img src={this.state.beers.image_url}/>
                    <h1>{this.state.beers.name}</h1>
                    <h2>{this.state.beers.tagline}</h2>
                    <h2>{this.state.beers.first_brewed}</h2>
                    <p>{this.state.beers.attenuation_level}</p>
                    <p>{this.state.beers.description}</p>
                    <p>{this.state.beers.contributed_by}</p>                   
                </div>
                
            </div>
        )
    }
}

export default BeerDetails
