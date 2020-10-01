import React from 'react'
import axios from 'axios'
const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers'

export default class SingleBeer extends React.Component {

    constructor(props) {
        super(props)
        this.beerId = props.match.params.beerId
        this.state = {
            beerData: []
        }
    }

    componentDidMount() {
        axios
            .get(apiUrl)
            .then(response => {
                this.setState({
                    beerData: response.data
                })
            })
            .catch(error => console.log(error))
    }


    render() {

        const filteredBeer = this.state.beerData.filter((beer) => beer._id === this.beerId)

        return (
            filteredBeer.map((beer) =>
                <>
                    <img src={beer.image_url} alt="beer" />
                    <p><strong>name</strong> {beer.name}</p>
                    <p><strong>tagline</strong> {beer.tagline}</p>
                    <p><strong>first brewed</strong> {beer.first_brewed}</p>
                    <p><strong>attenuation level</strong> {beer.attenuation_level}</p>
                    <p><strong>description</strong> {beer.description}</p>
                    <p><strong>contributed by</strong> {beer.contributed_by}</p>
                </>
            )
        )

    }
}