import React from 'react';
import Header from './Header';
import axios from 'axios';



export default class RandomBeer extends React.Component {

    state = {
        beer: ''
    }

    //GET RANDOM BEER 
    componentDidMount() {
      
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((res) => {
            console.log(res)
            this.setState({
                beer: res.data
            })
        })
    }

    render() {
        
        const {image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = this.state.beer

        return (
            <div>
                <Header />
                <div>
                <h1>Random Beer</h1>
                <img src={image_url} alt="beer"></img>
                    <h2>{name}</h2>
                    <h6><strong>Tagline:</strong>{tagline}</h6>
                    <h7><strong>First Brewed: </strong>{first_brewed}</h7>
                    <br></br>
                    <h7><strong>Attenuation Level:</strong>{attenuation_level}</h7>
                    <br></br>
                    <h8><strong>Description:</strong>{description}</h8>
                    <p><strong>Contributed By: </strong>{contributed_by}</p>
                </div>
               
                
            </div>
        )

    }
    
}