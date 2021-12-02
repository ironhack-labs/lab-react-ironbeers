import React from 'react'
import BeersService from '../../services/beers.services'
import HomeButton from '../HomeButton/HomeButton'
import './RandomBeer.css'


class BeerDetails extends React.Component {
    constructor() {
        super()


        this.state= {
            image_url: "",
            name: "",
            tagline: "",
            description: "",
            _id: ""
        }

        this.service = new BeersService()
    }


    componentDidMount() {

        this.service.getRandomBeer()
          .then(response => {
            const { image_url, name, tagline, description, } = response.data
    
            this.setState({ image_url, name, tagline, description,})
          })
          .catch(err => console.log(err))
          
    }



    render() {
        return(
            <>
                <HomeButton />
                <div>
                    <img src={this.state.image_url} alt={this.state.name} />
                    <h1>{this.state.name}</h1>
                    <p>{this.state.tagline}</p>
                    <p>{this.state.description}</p>
                </div>
            </>
        )
    }
}


export default BeerDetails