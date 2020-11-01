import React, { Component } from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'
import './AllBeers.css'


class BeerDetail extends Component {


    state={
        beer: {}
    }

    componentDidMount(){
        console.log(this.props.match.params.beerId)
        let beerId = this.props.match.params.beerId
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response)=>{
                this.setState({
                    beer:response.data,
                    
                })
            })
    }

    render() {
        
        const {attenuation_level, contributed_by, description, first_brewed, image_url, name, tagline} = this.state.beer
        

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

export default BeerDetail