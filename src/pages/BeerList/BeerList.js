import React, { Component } from 'react'
import BeersService from '../../services/beers.service'
import SCBeerList from '../BeerList/BeerList.styled'
import Navbar from '../../components/Navbar/Navbar'
import BeerItem from '../../components/BeerItem/BeerItem'

export default class BeerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: []
        }

        this.beersService = new BeersService();
    }

    refreshState() {
        this.beersService.getAllBeers()
            .then(response => {
                this.setState({ beers: response.data });
            })
            .catch(err => console.error(err))
    }

    componentDidMount() {
        this.refreshState();
    }

    displayBeers() {
        const { beers } = this.state;
        return beers.map(beer => {
            return (
                <BeerItem key={beer._id} {...beer} />
            )
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <SCBeerList>
                    <div>
                        <ul>
                            {
                                this.displayBeers()
                            }
                        </ul>
                    </div>
                </SCBeerList>
            </div>
        )
    }
}
