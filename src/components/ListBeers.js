import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ListBeers extends Component {

    //constructor(props) {
    //    super(props)
    //    this.state = {
    //        beers: [],
    //        name: ""
    //    }
    //}
    //componentDidMount() {
    //    axios.get('https://ih-beers-api2.herokuapp.com/beers/')
    //        .then(response => {
    //            this.setState({
    //                beers: response.data,
    //                name: ""
    //            })
    //            console.log(this.state.beers)
    //        })
    //}

    render() {
        return (
            <div>
                <header>
                    <Link to={"/"}><img alt="header" src="../header.png" ></img></Link>
                </header>


            </div>
        )
    }
}
