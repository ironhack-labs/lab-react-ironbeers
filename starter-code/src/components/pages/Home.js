import React, { Component } from 'react'
import axios from 'axios'
//import Services from '../../services'

export default class Home extends Component {

    constructor (props) {

        super(props)

        this.state = {
            beers: []
        }


    }


    getAllBeers = () => {

        axios.get('https://ih-beers-api2.herokuapp.com/beers') 
            .then(response => {
                console.log(response)
                this.setState({
                    beers: response.data
                })
            })
            .catch(err => console.log(err))
        
    }


    componentDidMount() {
        this.getAllBeers()
    }

    render() {
        console.log(this.state.beers)
        return (
            <div className="container">

                <h1>Listado de cervezas</h1>
                <ul>
                {this.state.beers.map((elm,idx) => (
                    <li key={idx}> {elm.name}</li>
                ))}
                </ul>
            </div>
        )

    }


}