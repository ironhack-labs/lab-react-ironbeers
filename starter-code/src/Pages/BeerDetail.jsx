import React, { Component } from 'react'
import DetailBeerCard from '../components/DetailBeerCard'

export default class Beer extends Component {
    render() {
        return (
            <>
                <DetailBeerCard beerId={this.props.match.params.beerId} />
            </>
        )
    }
}