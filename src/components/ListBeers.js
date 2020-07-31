import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { CardGroup, Card } from "react-bootstrap"


export default class ListBeers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beers: [],
            name: ""
        }
    }
    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/')  
            .then(response => {
                this.setState({
                    beers: response.data,
                    name: ""
                })
            })
    }

    render() {
        const lista = this.state.beers.map(beer => (
            <CardGroup>
            <Card key={beer._id} style={{ width: '360px' }}>
                <Card.Img className='beer-img' variant="top" src={beer.image_url} />
                <Card.Body>
                    <Card.Title> <Link to={"/beers/:beerId"}><h1>{beer.name}</h1></Link></Card.Title>
                    <Card.Text>
                        {beer.tagline}
                    </Card.Text>
                    <p>Created by:{beer.contributed_by}</p>
                </Card.Body>
            </Card>
            </CardGroup>))
        return (
            <div>
                <header>
                    <Link to={"/"}><img alt="header" src='/header.png' ></img></Link>
                </header>
                {lista}

            </div>
        )
    }
}
