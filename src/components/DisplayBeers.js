import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import BeerDetails from './BeerDetails';
import BeerBriefInfoCard from './BeerBriefInfoCard';
import Header from './Header';
import NewBeerForm from './AddBeer';
import Search from './Search';



class DisplayBeers extends Component {
    constructor() {
        super()
        this.state = {
            allBeers: undefined,
            search: undefined
        }
    }

    componentDidMount() {

        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                // console.log(response.data)
                this.setState({ allBeers: response.data })
                // console.log(this.state.allBeers)
            })
            .catch((err) => console.error(err))


    }

    searchProduct = product => {

        this.setState({
            search: product
        })
        let route =
            axios
                .get('https://ih-beers-api2.herokuapp.com/beers/search?q=' + this.state.search)
                .then((response) => {
                    // console.log(response.data)
                    this.setState({ allBeers: response.data })
                    // console.log(this.state.allBeers)
                })
                .catch((err) => console.error(err))

    }






    addBeer = newBeer => {
        console.log(newBeer)

        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
            .then(response => {
                console.log("You just created this beer: ", response.data);
            })
            .catch(error => {
                console.log("Error is: ", error);
            })

    }





    render() {
        return (
            <Container>
                {
                    !this.state.allBeers
                        ?
                        <h1>Not Yet</h1>
                        :
                        <>
                            <Header />
                            <Search searchProduct={this.searchProduct} search={this.state.search} />
                            {/* <Link className="nav-link" to="/new-beer">NewBeer</Link> */}
                            <NewBeerForm addBeer={this.addBeer} />
                            {this.state.allBeers.map(beer => <BeerBriefInfoCard key={beer._id} {...beer} />)}

                        </>


                }
            </Container>
        )
    }
}




export default DisplayBeers