import React, { Component } from 'react'
import axios from 'axios'

export default class RandomBeers extends Component {
    state = {
        beers: []
    }

    componentDidMount() {

        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((res) => {
                this.setState({
                    beers: res.data
                })
            })
    }


    render() {
        let myStyle = {
            marginTop: "30px",
            marginLeft: "auto",
            marginRight: "auto", 
            width: "18rem",
            
        }

     if (!this.state.beers) {
            return (
                <div className="text-center">
                    <div className="spinner-border text-info" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

            )
        }
        
        const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = this.state.beers
        
        return (
             <div class="card" style={myStyle}>
                <img  src={image_url} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{tagline}</p>
                    <p className="card-text">{first_brewed}</p>
                    <p className="card-text">{attenuation_level}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{contributed_by}</p>
                </div>
            </div>

        );
    }

}


