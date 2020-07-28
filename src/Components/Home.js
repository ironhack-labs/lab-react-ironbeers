import React, { Component } from 'react'
import { Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                console.log('response.data in Home component: ', response.data)
                this.setState({
                    beers: response.data
                })
            })
    }

    render() {
        console.log('this.props.history: ', this.props.history)
        const beersCards = this.state.beers.map((ele, i) => {
            return (
                <Card key={i} className="col-md-3">
                    <img src={ele.image_url} className="cardImage col-3" alt={ele.name} />
                    <Card.Body>
                        <Link to={`/${ele._id}`}><Card.Title>{ele.name}</Card.Title></Link>
                        <Card.Text>
                            {ele.tagline}
                        </Card.Text>
                        <Card.Text className="created">
                            <strong >Created by:</strong> {ele.name}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        })

        return (
            <div>
                <Row className="rowCards">
                    {beersCards}
                </Row>
            </div>
        )
    }
}

