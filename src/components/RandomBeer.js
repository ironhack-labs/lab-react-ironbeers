import React, { Component } from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'

export default class RandomBeer extends Component {

    state= {
        random: {}
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((response)=>{
                this.setState({
                    random: response.data
                })
            })
    }


    render() {

        const {image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = this.state.random

        return (
            <div>
                <Card style={{ width: '18rem', marginTop:'10px'}}>
                    <Card.Img className="img-detail" variant="top" src= {image_url} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>{tagline}</p>
                            <p>{attenuation_level}</p>
                            <p>{first_brewed}</p>
                            <article>{description}</article>
                            <small>{contributed_by}</small>
                        </Card.Text>
                       
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
