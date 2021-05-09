import React, { Component } from 'react'
import BeersService from './../../services/beers.service'
import SCSingleBeer from './SingleBeer.styled'
import Navbar from '../../components/Navbar/Navbar'
import BeerDetails from '../../components/BeerDetails/BeerDetails'

export default class SingleBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleBeer: {}
        }
        this.beersService = new BeersService();
    }

    getBeer = () => {
        const beerId = this.props.match.params.id;
        console.log(beerId)
        this.beersService.getSingleBeer(beerId)
            .then(response => {
                this.setState({ singleBeer: response.data });
            })
            .catch(err => console.error(err))
    }

    componentDidMount() {
        this.getBeer();
    }

    displaySingleBeer() {
        const { singleBeer } = this.state;
        return (

            <BeerDetails {...singleBeer} />
        )
    }


    render() {
        return (
            <div>
                <Navbar />
                <SCSingleBeer>
                    {
                        this.displaySingleBeer()
                    }
                </SCSingleBeer>
            </div>
        )
    }
}
