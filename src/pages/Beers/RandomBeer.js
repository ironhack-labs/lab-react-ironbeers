import React from 'react'
import CardDetails from '../../components/CardBeer/CardDetails/CardDetails'
import NavbarBeer from '../../components/Navbar/NavbarBeer'
import BeerService from '../../services/BeerService'


export default class RandomBeer extends React.Component {
    constructor() {
        super()
        this.state = {
            beer: null
        }
        this.beerService = new BeerService()

    }
    componentDidMount() {
        this.upBeers()
    }
    upBeers = () => {
        return this.beerService
            .getRandomBeer()
            .then((beer) => {
                this.setState({
                    ...this.state,
                    beer: beer.data
                })
            })
            .catch((error) => console.log(error))
    }
    render() {

        return (
            <div>
                <NavbarBeer />
                {
                    this.state.beer &&
                    <CardDetails beer={this.state.beer} />
                }
            </div>
        )
    }
}
