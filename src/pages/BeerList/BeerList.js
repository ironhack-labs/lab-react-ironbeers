import React, { Component } from 'react'
import BeersService from '../../services/beers.service'
import SCBeerList from '../BeerList/BeerList.styled'
import Navbar from '../../components/Navbar/Navbar'
import BeerItem from '../../components/BeerItem/BeerItem'

export default class BeerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            search: ""
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
                <>
                    <BeerItem key={beer._id} {...beer} />
                    <hr></hr>
                </>
            )
        })
    }

    handleSearch(e) {
        //this.setState({
        //  search: e.target.value
        //})
        this.beersService.searchBeers(e.target.value)
            .then((response) => {
                this.setState({ beers: response.data })
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                <Navbar />
                <SCBeerList>
                    <div>
                        <input name="search" type='text' placeholder="Search your beer..." onChange={(e) => this.handleSearch(e)}></input>
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
