import React, { Component } from 'react';
import axios from 'axios';
import BeerItem from './BeerItem';
import Header from './Header';

 
export default class RandomBeer extends Component {
    constructor(){
        super();
        this.state = {
            beer: []
        }
    }

    // getAllBeers = () => {
        
    // }
    
    componentDidMount() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/random")
        .then( (res)  => {this.setState({beer: res.data})})
        .catch( () => {console.log("wrong")})
        
    }

    render(){
        return(
            
            <div>
                <Header/>
                {this.state.beer.map(e => {
                    const {name, image_url, tagline, contributed_by, first_brewed, attenuation_level, description, _id} = e
                    return <BeerItem key={_id} name={name} image={image_url} tagline={tagline} contributed_by={contributed_by} first_brewed={first_brewed} attenuation_level={attenuation_level} descrition={description}/>
                })}
            </div>
        )
    }
    

}

