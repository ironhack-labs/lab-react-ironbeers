import React, { Component } from 'react'
import axios from 'axios'
import BeerCard from './BeerCard'

export default class BeerContainer extends Component {
    state = {
        beer:{}
    }

    getBeer = async() => {
        const {params} = this.props.match

        const singleBeer = await axios.get(`http://ih-beer-api.herokuapp.com/beers/${params.id}`)

        this.setState({beer: singleBeer.data})
    }

    componentDidMount(){
        this.getBeer()
    }

    render() {
        const {beer} =this.state
        return (
            <div className="columns is-centered">
                <div className="column is-half">
                    {beer.length === 0 && <div className="button is-danger is-loading">Loading</div>}
                    <BeerCard beerSingle={beer} key={this.props.match.params.id}/>
                </div>
            </div>
        )
    }
}
