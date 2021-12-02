import React from 'react'
import BeersService from '../../services/beers.services'
import HomeButton from '../HomeButton/HomeButton'
import './BeerDetails.css'


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
    
        const id = this.props.match.params.id

        this.service.getOneBeer(id)
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
                <div className="main-new-beer-container">
                    <div className="form-container">
                        <img className="beer-list-img" src={this.state.image_url} alt={this.state.name} />
                        <h1 className="form-label">{this.state.name}</h1>
                        <p>{this.state.tagline}</p>
                        <p>{this.state.description}</p>
                    </div>
                </div>
            </>
        )
    }
}


export default BeerDetails