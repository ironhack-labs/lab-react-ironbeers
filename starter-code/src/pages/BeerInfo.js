import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'

export default class BeerInfo extends Component {
    state={
        beer:{}
    }
    //axios get beer by searching with id in url
    componentDidMount(){
        axios.get(`https://ih-beers-api.herokuapp.com/beers/${this.props.match.params.id}`)
        .then(response=>{
            let beer = response.data
            this.setState({
                beer:beer
            })
        })
        .catch(err=>console.log(err))
    }
    render() {
        return (
            <div className='beerinfo'>
                <Nav/>
                <div className='beerinfo-img'>
                    <img src={this.state.beer.image_url} alt=""/>
                </div>
                
                <div className='beerinfo-top'>
                    <div className='top-one'>
                        <h1>{this.state.beer.name}</h1>
                        <h3>{this.state.beer.tagline}</h3>
                    </div>
                    <div className='top-two'>
                        <h3>{this.state.beer.attenuation_level}</h3>
                        <h4>{this.state.beer.first_brewed}</h4>
                    </div>
                </div>

                <div className='beerinfo-bottom'>
                    <p className='beerinfo-description'>{this.state.beer.description}</p>
                    <br/>
                    <p className='beerinfo-contri'>{this.state.beer.contributed_by}</p>
                </div>
            </div>
        )
    }
}
