import React, { Component } from 'react'
import HomeCard from './HomeCard'

export default class HomeContainer extends Component {
    state = {
        title: '',
        link: '',
        image: ''
    }

    render() {
        const { title, link, image } = this.state
        console.log(title, link, image)
        return (
            <div className="columns is-centered">
                <div className="column is-half">
                    <HomeCard title='All Beers' link='/beers' image='/images/beers.png' />
                    <HomeCard title='Random Beer' link='/random-beer' image='/images/random-beer.png' />
                    <HomeCard title='New Beer' link='/new-beer' image='/images/new-beer.png' />
                </div>
            </div>
        )
    }
}