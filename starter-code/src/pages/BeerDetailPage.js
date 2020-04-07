import React, { Component } from 'react';
import axios from 'axios';

class beerDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            oneBeer: [] 
        }
    }

    componentDidMount() {
        debugger
        axios.get(`https://ih-beers-api.herokuapp.com/beers/${this.props.match.params.beerId}`)
        .then(response => {
            this.setState({oneBeer: response.data})
            //console.log(response)
        })
        .catch((error)=> {
            this.setState({
                error: error
                })
			})
    }

    render() {
        debugger
        const aBeer = this.state.oneBeer
        //console.log(beer)
        return (
            <div className="beer-page">
                {/* {this.state.oneBeer.map((beer, index) =>  */}
              
                    <img src={aBeer.image_url} alt="image-beer"/>
                    <h1>{aBeer.name}</h1>
                    <p>{aBeer.tagline}</p>
                    <p>{aBeer.first_brewed}</p>
                    <p>{aBeer.attenuation_level}</p>
                    <p>{aBeer.description}</p>
                    <p>{aBeer.contributed_by}</p>
                    <hr></hr>
               
                {/* )} */}
                
            </div>

            
        )
    }
}

export default beerDetails
