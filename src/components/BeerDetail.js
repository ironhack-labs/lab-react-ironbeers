import React from 'react';
import Header from './Header';
import axios from 'axios';



export default class BeerDetail extends React.Component {

    state = {
        beer: ''
    }

    //GET BEER DETAIL
    componentDidMount() {
        {/* //DYNAMIC ROUTES MUST MATCH THE PARAMS ID!!!!!! */}
        let id = this.props.match.params.beerId
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((res) => {
            console.log(res)
            this.setState({
                beer: res.data
            })
        })
        .catch((er) => {
            console.log(er)
        })
    }

    render(){

        //LOADING SCREEN
        if (!this.state.beer){
            return(
                <div class="spinner-border text-danger" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            )
        }

        const {image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = this.state.beer

        return (

            <div>
                <Header />
                <div>
                    <h1><strong>Beer Details</strong></h1>
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