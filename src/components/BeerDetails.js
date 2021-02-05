import React, { Component } from 'react'
import './BeerDetails.css'

export default class BeerDetails extends Component {

    constructor(props) { 
        super(props); 
        this.state = { 
            details: {}, 
            error: null, 
            isLoading: false
        } 
    } 

    componentDidMount () {

        this.setState({isLoading: true})
        
        let url = ''

        if(this.props.match.path.includes('random')) {
            url = "https://ih-beers-api2.herokuapp.com/beers/random"
        } else {
            url = `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
        }
        
        fetch(url)
        .then( response => {
            if(response.status >= 400) {
                throw new Error("Error from server");
            }
            return response.json(); //this is what is called "beers" in the following then().
        })
        .then( details => {
            this.setState({
                details,
                isLoading: false
            })
        },
        error => {
            this.setState({
                error,
                isLoading: false
            })
        })
    }

    render() {

        let {details, error, isLoading} = this.state;


        if (error) {
            return (
                <div>{error.message}</div>
            )
        }

        if (isLoading) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <div className="BeerDetails">
                <img src={details.image_url} alt=''/>
                <div>
                    <h2>{details.name}</h2>
                    <h3>{details.tagline}</h3>
                    <p>{details.description}</p>
                    <h4>Contribuited by: {details.contributed_by}</h4>
                </div>
            </div>
        )
    }
}

