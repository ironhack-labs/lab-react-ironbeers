import React, { Component } from 'react'
import BeerCard from './BeerCard'
import './BeerList.css'


class BeersList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beers: []
        }
    }

    componentDidMount = () => {
        this.props.getAllBeers()
            .then(response => this.setState({ beers: response }))
            .catch(err => console.log(`Hubo un error: ${err}`))
    }

    render() {
        return (
            <section>
                {
                    this.state.beers.splice(0, 20).map((elm) => <BeerCard key={elm._id} id={elm._id} name={elm.name} img={elm.image_url} tagline={elm.tagline} creator={elm.contributed_by} />)
                }
            </section>
        )
    }

}

export default BeersList