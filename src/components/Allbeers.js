import React, { Component } from 'react'
import axios from 'axios'
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'

export class Allbeers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beers: []
        }
    }


    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/')
            .then(response => {
                this.setState({
                    beers: response.data,
                    name: ""
                })
                console.log(this.state.beers)
            })
    }

    render() {
        const lista = this.state.beers.map(beer => (
            <Card key={beer._id} style={{ width: '360px' }}>
                <Card.Img className='beer-img' variant="top" src={beer.image_url} />
                <Card.Body>
                    <Card.Title>
                     <Link to={"/beers/" + beer._id}><h1>{beer.name}</h1></Link> 
                    </Card.Title>
                    <Card.Text>
                        {beer.tagline}
                    </Card.Text>
                    <p>Created by:{beer.contributed_by}</p>
                </Card.Body>
            </Card>
        ))

        return (
            <div>
                {lista}
            </div>
        )
    }
}

export default Allbeers
