import React, { Component } from 'react'
import {Button, Spinner} from  'react-bootstrap'
import axios from 'axios'



class RandomBeer extends Component {

    state = {
        RandomBeer: null
    }

        async componentDidMount(){
        try {
           
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            this.setState({
                RandomBeer: response.data
            })
        }  
        catch(err){
            console.log('Get a random beer from the DB failed', err)
        }
    }



    render() {

        if (!this.state.RandomBeer) {
            return <Spinner animation="border" variant="primary" />
        } 

        const {RandomBeer} = this.state;
        return (
         
            <div>
              <img
                src={RandomBeer.image_url}</img>
              <h3>{RandomBeer.name}</h3>
              <h4>{RandomBeer.tagline}</h4>
              <p>First brewed:{RandomBeer.first_brewed}</p>
              <p>Attenuation level: {RandomBeer.attenuation_level}</p>
              <h5> {RandomBeer.description}</h5>
              <p>Created by: {RandomBeer.contributed_by}</p>
            </div>
    
        )
    }
}

export default RandomBeer