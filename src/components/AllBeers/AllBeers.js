import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import BeersService from '../../services/BeersServices'
import BeerItem from '../BeerItem/BeerItem'
import './AllBeers.css'

class AllBeers extends React.Component {

    constructor() {
        super()
        this.state = {
            beers: null
        }
        this.BeersService = new BeersService()
    }

    componentDidMount() {
        this.BeersService.getBeers()
            .then(res => {
                this.setState({
                    ...this.state,
                    beers: res.data
                })
            })
            .catch(err => console.error(err))
    }

    displayBeers = () => {
        return (
            this.state.beers ?
                this.state.beers.map(beer => {
                    return (
                        <BeerItem key={beer._id} {...beer} />
                    )
                })
                :
                <p>Loading...</p>
        )
    }

    render() {
        return (
            <Row className="mb-3">
                {this.props.children}
                {
                    this.displayBeers()
                }
            </Row >
        )
    }
}

export default AllBeers
