import React, { Component } from 'react'
import HomePageCard from './HomePageCard'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <HomePageCard imgSrc={"./images/beers1.jpeg"} title={"All Beers"} text={"Here are many many beers!"} route={"beers"}/>
                <HomePageCard imgSrc={"./images/beers3.jpg"} title={"Random Beer"} text={"Can't decide? Here's a mystery beer for you!"} route={"random-beer"}/>
                <HomePageCard imgSrc={"./images/beers2.jpeg"} title={"New Beer"} text={"Missing your favourite? Add a new beer here!"} route={"new-beer"}/>
            </div>
        )
    }
}
