import NavBar from './../navBar/NavBar'
import React, { Component } from 'react'
import beersService from './../service/beers.service'
import Loader from './../Spinner/Loader'
import { Container, Row, Button, Modal } from 'react-bootstrap'
import BeerCard from './BeerCard'

class ListBeers extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined,
            
        }
        this.beersService = new beersService()
    }

    componentDidMount = () => this.refreshBeers()

    refreshBeers = () => {
        this.beersService
            .getBeers()
            .then(res => this.setState({ beers: res.data }))
            .catch(err => console.log(err))
    }

    render() {
    return(
        <>
        <NavBar/>
        <Container>

<h1>Listado de cervezas</h1>



<Row>
    {
        this.state.beers
            ?
            this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)
            :
            <Loader />
    }
</Row>
</Container>
</>
    )
}}
export default ListBeers