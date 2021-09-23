import React from 'react'
import CardDetails from '../../components/CardBeer/CardDetails/CardDetails'
import NavbarBeer from '../../components/Navbar/NavbarBeer'
import BeerService from '../../services/BeerService'

export default class BeerDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beer: null
        }
        this.beerService = new BeerService()
    }
    componentDidMount() {
        this.loadBeer()
    }
    loadBeer() {

        this.beerService.getOneBeer(this.props.match.params.beerId)
            .then((beer) => {
                this.setState({
                    ...this.state,
                    beer: beer.data
                })
            })
            .catch((err) => console.error(err))
    }
    render() {

        return (
            <div>
                <NavbarBeer />
                {
                    this.state.beer ?
                        // <h1>Details</h1> :
                        <CardDetails beer={this.state.beer} /> :
                        <h1>loading...</h1>
                }
            </div>
        )
    }
}
