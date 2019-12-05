import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import Card from './Card'

export default class Beers extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                this.setState({ beers: response.data })
            })
    }

    render() {
        return (
            <div>
                <Header></Header>
                <img src="../images/beers.png" alt="" />
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id asperiores eaque quibusdam soluta repudiandae quam incidunt dolorem sint pariatur fugiat! Ullam modi at qui nihil sed sit nisi deserunt molestiae?Maxime cumque quam sapiente, quis id facere repellendus quas harum sequi. Sit ut, similique, deserunt quisquam ad laborum sequi cupiditate nesciunt repellendus quia perferendis accusantium doloribus pariatur voluptatem quo? Modi.</p>
                <ul>
                    {this.state.beers.map((beer) => <li><Card payLoad={beer}></Card></li>)}
                </ul>

            </div>
        )
    }
}
