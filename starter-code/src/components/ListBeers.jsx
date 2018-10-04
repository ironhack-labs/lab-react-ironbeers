import React, { Component } from 'react';
import axios from 'axios';
import BeerItem from './BeerItem';
import Header from './Header';

 
export default class ListBeers extends Component {
    constructor(){
        super();
        this.state = {
            beers: []
        }
    }

    // getAllBeers = () => {
        
    // }
    
    componentDidMount() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/all")
        .then( (res)  => {this.setState({beers: res.data})})
        .catch( () => {console.log("wrong")})
        
    }

    render(){
        return(
            
            <div>
                <Header/>
                {this.state.beers.map(e => {
                    const {name, image_url, tagline, contributed_by, _id} = e
                    return <BeerItem key={_id} name={name} image={image_url} tagline={tagline} contributed_by={contributed_by}/>
                })}
            </div>
        )
    }
    

}

