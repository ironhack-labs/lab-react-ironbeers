import React from 'react'
import { Link } from 'react-router-dom'
import CardBeer from '../../components/CardBeer/CardBeer'
import NavbarBeer from '../../components/Navbar/NavbarBeer'
import BeerService from '../../services/BeerService'

export default class Beers extends React.Component {
    constructor() {
        super()
        this.state = {
            beers: null
        }
        this.beerService = new BeerService()
    }
    componentDidMount() {
        this.refreshBeers()

    }
    refreshBeers() {
        this.beerService.getBeers()
            .then((res) => {
                this.setState({
                    ...this.state,
                    beers: res.data
                })
            })
            .catch(Error => console.log(Error))
    }
    render() {
        return (
            <>
                <div className="card card-beer" >
                    <NavbarBeer />
                    {
                        this.state.beers ?
                            this.state.beers.map((beer) => {
                                return (
                                    <Link key={beer._id} to={`/beers/${beer._id}`}  >
                                        <CardBeer beer={beer} />
                                    </Link>
                                )
                            })
                            : <h2>Loading...</h2>
                    }
                </div >
            </>
        )
    }
}

