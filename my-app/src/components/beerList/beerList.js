import React, { Component } from 'react'
import beersService from './../../service/service'
import './beerList.css'

import BeerCard from './beer-card'
import Loader from './../shared/Spinner/Loader'


import { Container, Row } from 'react-bootstrap'


class beersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined,
            beersCopy: undefined,
            text: '',
        }
        this.beersService = new beersService()

    }
componentDidMount =() =>this.refreshbeers()


    refreshbeers = () => {
        this.beersService
            .getBeerList()
            .then(res => this.setState({ beers: res.data, beersCopy:res.data }))
            .catch(err => console.log(err))
    }

    filter(event) {

        
        let text = event.target.value
        const data = this.state.beersCopy

        const newData = data.filter(function (item) {
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })

        this.setState({
            beers: newData,
            text: text,
        })
    }

    render() {
        return (
            <>
                <Container>

                    <h1>Listado de cervezas</h1>
                    <br />
                    <input className="form-control" value={this.state.text} onChange={(text) => this.filter(text)} />

                    <br/>

                    <Row className="beerList">
                        {
                            this.state.beers
                                ?
                                this.state.beers.map(elm => <BeerCard key={elm._id} _id={elm._id} name={elm.name} imageurl={elm.image_url} />)
                                :
                                <Loader />
                        }
                    </Row>
                </Container>


            

            </>
        )
    }
}

export default beersList